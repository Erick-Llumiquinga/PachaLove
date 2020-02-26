const mongoose = require('mongoose');

const { Schema } = mongoose;

const HuertoModel = new Schema(
  {
    nombre: {type: String},
    suelo: {type: String},
    planta: {type: String},
    fecha: {type: Date}
  }
);

module.exports = mongoose.model('Huerto', HuertoModel,'Huerto');