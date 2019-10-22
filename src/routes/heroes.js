const { Hero, validate } = require('../models/hero');
const express = require('express');
const router = express.Router();

// GET heroes listing
router.get('/', async (req, res, next) => {
  const heroes = await Hero.find();
  res.json(heroes || []);
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

  res.status(201).json(hero);
});

module.exports = router;
