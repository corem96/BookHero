/*jshint esversion: 6 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const HeroSchema = new Schema({
  // id: { type: String, index: { unique: true } },
  name: { type: String, required: true, min: 3, max: 60 },
  lastName: { type: String, required: true, min: 3, max: 60 },
  heroName: { type: String, required: true, min: 3, max: 60 },
  age: { type: Number, required: true, min: 3, max: 60 },
  genre: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: Date
});

HeroSchema.virtual('uniqueId')
  .get(() => 
    // this.filename.replace(path.extname(this.filename), '')
    Math.floor((Math.random() * 100) + 1)
  );

module.exports = mongoose.model('Hero', HeroSchema);