const express = require('express');
const mongoose = require('mongoose');
const TiempoModel = require('../db/models/tiempoModel');
const Tiempo = require('../models/tiempoModel');
const routerApi = express.Router();
const db = mongoose.connect('mongodb://localhost/PachaLove');

routerApi.route('/time/allTips')
  .get((req, res) => {
    Tips.find((err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

routerApi.route('/time/newTip')
  .post((req, res) => {
    let tip = new TipsModel(req.body)

    tip.save((err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

routerApi.route('/time/updateTip')
  .put((req, res) => {
    let id = req.body.id
    let Query = req.body

    TipsModel.updateOne({'_id': id}, Query, (err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

routerApi.route('/time/deleteTip')
  .delete((req, res) => {
    let id = req.body.id

    TipsModel.deleteOne({"_id": id}, (err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });
