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

    let modelHour = {
      tiempo: {type: String},
      resumen: {type: String},
      precipitacionProb: {type: String},
      precipitacionTipo: {type: String},
      temperatura: {type: String},
      humedad: {type: String},
      velocidadViento: {type: String},
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
        console.log('entro a pedir el clima')
      fetch(urlWheater,header)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('pido el clima')
          model.timezone = responseJson.timezone;
          model.tiempo = (responseJson.currently.time).toString();
          model.resumen = responseJson.currently.summary;
          model.precipitacionProb = (responseJson.currently.precipProbability).toString();
          model.precipitacionTipo = responseJson.currently.precipType;
          model.temperatura = (responseJson.currently.temperature).toString() ;
          model.humedad = (responseJson.currently.humidity).toString();
          model.velocidadViento = (responseJson.currently.windSpeed * 1609).toString();
          let tiempo = new TiempoModel(model);
          tiempo.save((err1, resp1) => {
            if(err1){
              return res.json(err1)
            }
            responseJson.hourly.data.forEach((item) => {
                modelHour.tiempo = item.time.toString();
                modelHour.resumen = item.summary;
                modelHour.precipitacionProb = item.precipProbability.toString();
                modelHour.precipitacionTipo = item.precipType;
                modelHour.temperatura = item.temperature.toString() ;
                modelHour.humedad = item.humidity.toString();
                modelHour.velocidadViento = (item.windSpeed * 1609).toString();

                let tiempoHora = new TiempoHoraModel(modelHour);
                tiempoHora.save((err1, resp1) => {
                  if(err1){
                    console.log(err1)
                  }
                  console.log('guarda el clima por hora')
                })
            });
            console.group('Dato actual')
          })
        })
      }
      else{
      TiempoHoraModel.findOne({'tiempo': hourActuallity},(err1,resp1) => {
        console.log('entro al ultimo else') 
        if(err1){
          console.log('entro al if');
        }
        else{
          console.log('entro al  else') 
            TiempoModel.updateOne({'_id': resp.id},resp1,(err2,resp2) =>{
              if(err){
                console.log(err);
              }
              console.log('actualiza los datos en la base del tiempo')
              return true;
            })
          }
        console.log('Actualizacion')
       })
      };
      return res.json(resp);
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
