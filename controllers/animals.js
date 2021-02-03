const Animals = require('../models/animals');

module.exports.getAllAnimals = async (req, res) => {
  const animals = await Animals.getAllAnimals();
  return res.status(201).send(animals);
};

module.exports.getAllAnimalsFiltered = async (req, res) => {
  const animals = await Animals.getAllAnimalsFiltered(req);
  return res.status(201).send(animals);
};
