const mongoose = require('mongoose');

const { Schema } = mongoose;

const TiempoModel = new Schema(
  {
    ubicacion: {type: Array},
    timezone: {type: String},
    tiempo: {type: Number},
    resumen: {type: String},
    precipitacionProb: {type: String},
    precipitacionTipo: {type: String},
    temperatura: {type: String},
    humedad: {type: String},
    velocidadViento: {type: String},
  }
);

module.exports = mongoose.model('Tiempo', TiempoModel,'Tiempo');
