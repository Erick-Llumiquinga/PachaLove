const TiempoModel = require('../db/models/tiempoModel');
const TiempoHoraModel = require('../db/models/timpoHoraModelo');
const fetch = require('node-fetch');

module.exports = class Tiempo {
  constructor(){
    this.latitud = "";
    this.longitud = "";
    this.arrayTemporal = [];
    this.mensaje = 'datos guardados'

  }

  clima(req){

    console.log("datos ubc" + JSON.stringify(req))

    this.latitud = req.latitud;
    this.longitud = req.longitud;
    let urlWheater = `https://api.darksky.net/forecast/21ba87bde77907a5b0c9bc639b02d0f0/${this.latitud},${this.longitud}`;
  
    let model = {
      ubicacion: [this.latitud,this.longitud],
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
      return   console.log(err)
    }
      else if(resp.length == 0){
          //console.log('entro a pedir el clima')
        fetch(urlWheater,header)
        .then((response) => response.json())
        .then((responseJson) => {
          //console.log('pido el clima')
            model.timezone = responseJson.timezone;
            model.tiempo = (responseJson.currently.time).toString();
            if(responseJson.currently.summary == 'Possible Light Rain'){
              model.resumen = 'Posible lluvia ligera';
            }
            else{
              model.resumen = responseJson.currently.summary;
            }      
            model.precipitacionProb = (responseJson.currently.precipProbability).toString();
            model.precipitacionTipo = responseJson.currently.precipType;
            model.temperatura = (responseJson.currently.temperature).toString() ;
            model.humedad = (responseJson.currently.humidity).toString();
            model.velocidadViento = (responseJson.currently.windSpeed * 1609).toString();
            let tiempo = new TiempoModel(model);
            tiempo.save((err1, resp1) => {
              if(err1){
                return console.log(err1)
              }
              else{
                responseJson.hourly.data.forEach((item) => {
                  modelHour.tiempo = item.time.toString();
                  modelHour.resumen = item.summary;
                  modelHour.precipitacionProb = item.precipProbability.toString();
                  modelHour.precipitacionTipo = item.precipType;
                  modelHour.temperatura = (item.temperature).toString() ;
                  modelHour.humedad = item.humidity.toString();
                  modelHour.velocidadViento = ((item.windSpeed * 1609).toFixed(2)).toString();
  
                  let tiempoHora = new TiempoHoraModel(modelHour);
                  
                  tiempoHora.save((err1, resp1) => {
                    if(err1){
                      //console.log(err1)
                    }
                    else{
                     // console.log('guarda el clima por hora')
                    }
                  })
                })  
              }
            })
        })
      }
      else{
        return this.mensaje
      };
    });
  
    return this.mensaje
  }
  
}