const express = require('express');
const mongoose = require('mongoose');
const Tiempo = require('../models/tiempoModel');
const routerApi = express.Router();
const db = mongoose.connect('mongodb://localhost/PachaLove');
const TiempoHoraModel = require('../db/models/timpoHoraModelo');

const tiempo = new Tiempo()

routerApi.route('/getDatasTime')
  .get((req, res) => {
    let latitud = req.query.latitud
    console.log('latirurd: ' + latitud)
    res.json(tiempo.clima(req.query));
  });

  routerApi.route('/getDatasTimeHour')
  .get((req, res) => {
    
    let arrayTemporal = [];
    
    TiempoHoraModel.find((err,resp) => { 
      if(err){
        console.log('entro al if');
      }
        resp.forEach((item,i) => {
          if(i < 4){
            arrayTemporal.push(item);
          }
        })
        return res.json(arrayTemporal);
    }) 
  });


  routerApi.route('/tips/newTip')
    .post((req, res) => {
      let tip = new TipsModel(req.body)

      tip.save((err,resp) => {
        if(err){
          return res.json(err);
        }
        return res.json(resp)
      })
    });

  routerApi.route('/tips/updateTip')
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

  routerApi.route('/tips/deleteTip')
    .delete((req, res) => {
      let id = req.body.id

      TipsModel.deleteOne({"_id": id}, (err,resp) => {
        if(err){
          return res.json(err);
        }
        return res.json(resp)
      })
    });

/*convertUnix(date) => {
  let unix_timestamp = date;

  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  return hourNow = hours;
}*/

  module.exports = routerApi;
