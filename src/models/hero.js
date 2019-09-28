/*jshint esversion: 6 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const Joi = require('joi');

const HeroSchema = new Schema({
  // id: { type: String, index: { unique: true } },
  name: { type: String, required: true, min: 3, max: 60 },
  lastName: { type: String, required: true, min: 3, max: 60 },
  heroName: { type: String, required: true, min: 3, max: 60 },
  age: { type: Number, required: true, min: 3, max: 60 },
  genre: { type: String, required: true, enum: ['niño', 'niña'] },
  created_at: { type: Date, default: Date.now },
  updated_at: Date
});

HeroSchema.virtual('uniqueId')
  .get(() => 
    Math.floor((Math.random() * 100) + 1)
  );

function validateHero(hero) {
  const schema = {
    name: Joi.string().required().min(3).max(50),
    lastName: Joi.string().required().min(3).max(50),
    heroName: Joi.string().required().min(3).max(50),
    age: Joi.number().required().min(3).max(10),
    genre: Joi.string().required().min(4).max(5)
  }
  return Joi.validate(hero, schema);
}

exports.Hero = mongoose.model('Hero', HeroSchema);
exports.validate = validateHero;