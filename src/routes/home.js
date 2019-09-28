const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({ title: 'BookHero', message: 'Bienvenido a BookHero' });
})

module.exports = router;