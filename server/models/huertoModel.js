const mongoose = require('mongoose');

const { Schema } = mongoose;

const HuertoModel = new Schema(
  {
    nombre: {type: String},
    tipo: {type: String},
    tiempo: {type: String}
  }
);

module.exports = mongoose.model('Huerto', HuertoModel,'Huerto');