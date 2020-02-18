const mongoose = require('mongoose');

const { Schema } = mongoose;

const TiempoModel = new Schema(
  {
    ubicacion: {type: String},
    timezone: {type: String},
    tiempo: {type: String},
    resumen: {type: String},
    precipitacionProb: {type: String},
    precipitacionTipo: {type: String},
    temperature: {type: String},
    humedad: {type: String},
    velocidadViento: {type: String},
  }
);

module.exports = mongoose.model('Tiempo', TiempoModel,'Tiempo');
