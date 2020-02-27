const express = require('express');
const mongoose = require('mongoose');
const routerApi = express.Router();
const db = mongoose.connect('mongodb://localhost/PachaLove');
const TipsModel = require('../db/models/tipsModel')

routerApi.route('/time/allTips')
  .get((req, res) => {
    TipsModel.find((err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

routerApi.route('/time/newTip')
  .post((req, res) => {
    let tips = new TipsModel(req.body)

    tips.save((err,resp) => {
      if(err){
        return res.json(err);
      }
      console.log('listooooo')
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

  module.exports = routerApi;
