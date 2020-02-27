const mongoose = require('mongoose');

const { Schema } = mongoose;

const TiempoHoraModel = new Schema(
  {
    tiempo: {type: String},
    resumen: {type: String},
    precipitacionProb: {type: String},
    precipitacionTipo: {type: String},
    temperatura: {type: String},
    humedad: {type: String},
    velocidadViento: {type: String},
  }
);

module.exports = mongoose.model('TiempoHora', TiempoHoraModel,'TiempoHora');
