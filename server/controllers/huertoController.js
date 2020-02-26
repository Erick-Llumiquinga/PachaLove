const express = require('express');
const mongoose = require('mongoose');
const routerApi = express.Router();
const HuertoModel = require('../db/models/huertoModel'); 
const db = mongoose.connect('mongodb://localhost/PachaLove');

routerApi.route('/allPlants')
  .get((req, res) => {
    HuertoModel.find((err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

routerApi.route('/newPlant')
  .post((req, res) => {
    let huerto = new HuertoModel(req.body)

    huerto.save((err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

routerApi.route('/updatePlant')
  .put((req, res) => {
    let id = req.body.id
    let Query = req.body

    HuertoModel.updateOne({'_id': id}, Query, (err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

routerApi.route('/deletePlant')
  .delete((req, res) => {
    let id = req.body.id

    HuertoModel.deleteOne({"_id": id}, (err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

  module.exports = routerApi