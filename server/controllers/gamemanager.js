let messages = [];
let id = 6;
let score = 0;

const { response } = require("express");
let data = require("../data.json");

//req and res is request and response
//these are our handlers
module.exports = {
  create: (req, res) => {
    const { name } = req.params;
    data.push({ name, score, id });
    id++;
    res.status(200).send(data);
  },

  read: (req, res) => {
    const response = data.sort((a, b) => b.score - a.score);
    res.status(200).send(response);
  },

  update: (req, res) => {
    const updateID = req.params.id;
    const gameIndex = data.findIndex((game) => game.id == updateID);

    data[gameIndex].score++;
    res.status(200).send(data);
  },

  delete: (req, res) => {
    const deleteID = req.params.id;
    const gameIndex = data.findIndex((game) => game.id == deleteID);
    data.splice(gameIndex, 1);
    res.status(200).send(data);
  },
};
