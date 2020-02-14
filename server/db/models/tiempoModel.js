const mongoose = require('mongoose');

const { Schema } = mongoose;

const TiempoModel = new Schema(
  {
    ubicacion: {type: Array},
    clima: {type: String},
    tiempo: {type: String},
    clave: {type: String},
    precipitacion: {type: String}
  }
);

module.exports = mongoose.model('Tiempo', TiempoModel,'Tiempo');