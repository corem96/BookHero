/*jshint esversion:6 */
const { Hero, validate } = require('../models/hero');
const express = require('express');
const router = express.Router();

// GET heroes listing
router.get('/', async (req,res) => {
  const heroes = await Hero.find();
  res.json(heroes);
});

// GET single hero
router.get('/:id', async (req,res) => {
  const hero = Hero.findById(req.params.id);
  if (!hero) return status(404).send(`El heroe número: ${id} no existe`);

  return res.status(200).send(hero);
});

// POST hero
router.post('/', async (req,res) => {
  const { error } = validate(req.body);
  if (error) { return res.status(400).send(error.details[0].message); }
  
  let hero = new Hero({
    name: req.body.name,
    lastName: req.body.lastName,
    heroName: req.body.heroName,
    age: req.body.age,
    genre: req.body.genre
  });
  
  await hero.save();

  res.send(hero);
});

// DELETE hero
router.delete('/:id', async (req,res) => {
  const id = req.params.id;
  const hero = await Hero.findByIdAndRemove(id);
  if (!hero)
    return res.status(404).send(`El heroe número: ${id} no existe`);

  res.send(hero);
});

module.exports = router;
