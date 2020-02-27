const express = require('express');
const mongoose = require('mongoose');
const routerApi = express.Router();
const db = mongoose.connect('mongodb://localhost/PachaLove');
const PlantaModel = require('../db/models/plantaModel')

routerApi.route('/planta/allPlanta')
  .get((req, res) => {
    PlantaModel.find((err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

routerApi.route('/planta/newPlanta')
  .post((req, res) => {
    let plantas = new PlantaModel(req.body)

    plantas.save((err,resp) => {
      if(err){
        return res.json(err);
      }
      console.log('listooooo')
      return res.json(resp)
    })
  });

routerApi.route('/suelo/updateSuelo')
  .put((req, res) => {
    let id = req.body.id
    let Query = req.body

    PlantaModel.updateOne({'_id': id}, Query, (err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

routerApi.route('/suelo/deleteSuelo')
  .delete((req, res) => {
    let id = req.body.id

    PlantaModel.deleteOne({"_id": id}, (err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

  module.exports = routerApi;
