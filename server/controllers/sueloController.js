const express = require('express');
const mongoose = require('mongoose');
const routerApi = express.Router();
const db = mongoose.connect('mongodb://localhost/PachaLove');
const SueloModel = require('../db/models/sueloModel')

routerApi.route('/suelo/allSuelo')
  .get((req, res) => {
    SueloModel.find((err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

routerApi.route('/suelo/newSuelo')
  .post((req, res) => {
    let suelos = new SueloModel(req.body)

    suelos.save((err,resp) => {
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

    SueloModel.updateOne({'_id': id}, Query, (err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

routerApi.route('/suelo/deleteSuelo')
  .delete((req, res) => {
    let id = req.body.id

    SueloModel.deleteOne({"_id": id}, (err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

  module.exports = routerApi;
