const express = require('express');
const mongoose = require('mongoose');
const TiempoModel = require('../db/models/tiempoModel');
const TiempoHoraModel = require('../db/models/timpoHoraModelo');
const Tiempo = require('../models/tiempoModel');
const fetch = require('node-fetch');

const routerApi = express.Router();
const db = mongoose.connect('mongodb://localhost/PachaLove');

let hourNow = "";

routerApi.route('/getDatasTime')
  .get((req, res) => {

    let latitud =  '-0.225219'//req.query.latitud;
    let longitud = '-78.5248'//req.query.longitud;
    let hourActuallity = req.body.hour;
    const urlWheater = `https://api.darksky.net/forecast/21ba87bde77907a5b0c9bc639b02d0f0/${latitud},${longitud}`;

    let model = {
      ubicacion: [latitud,longitud],
      timezone: {type: String},
      tiempo: {type: Number},
      resumen: {type: String},
      precipitacionProb: {type: Number},
      precipitacionTipo: {type: Number},
      temperatura: {type: Number},
      humedad: {type: Number},
      velocidadViento: {type: Number},
    }

    const header = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }

    TiempoModel.find((err,resp) => {
      if(err){
      return   res.send(err)
    }
      else if(resp.length == 0){
      fetch(urlWheater,header)
      .then((response) => response.json())
      .then((responseJson) => {
          model.timezone = responseJson.timezone;
          model.tiempo = responseJson.currently.time;
          model.resumen = responseJson.currently.summary;
          model.precipitacionProb = responseJson.currently.precipProbability;
          model.precipitacionTipo = responseJson.currently.precipType;
          model.temperatura = (responseJson.currently.temperature - 32) * (5/9);
          model.humedad = responseJson.currently.humidity;
          model.velocidadViento = (responseJson.currently.windSpeed * 1609);

          let tiempo = new TiempoModel(model);
          tiempo.save((err1, resp1) => {
            if(err1){
              return res.send(err1)
            }
            responseJson.hourly.data.forEach((item) => {
                let modelHour = {
                  tiempo: item.time,
                  resumen:  item.summary,
                  precipitacionProb: item.precipProbability,
                  precipitacionTipo: item.precipType,
                  temperatura: (item.temperature - 32) * (5/9),
                  humedad: item.humidity,
                  velocidadViento: (item.windSpeed * 1609)
                }

                let tiempoHora = new TiempoHoraModel(modelHour);
                tiempoHora.save((err1, resp1) => {
                  if(err1){
                    return res.send(err1)
                  }
                })
              });
              res.send('Dato Actual');
          })
        })
      }
      else{
      TiempoHoraModel.findOne({'tiempo': hourActuallity},(err1,resp1) => {
         if(err){
           return err
         }
         else{
           TiempoModel.updateOne({'_id': resp.id},resp1,(err2,resp2) =>{
            if(err){
              return err;
            }
            return true;
           })
         }
         res.send('Actualizacion')
       })
      };
      res.json(resp.length);
    });
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
