const mongoose = require('mongoose');

const { Schema } = mongoose;

const plantaModel = new Schema(
  {
    nombre: {type: String},
    descripcion: {type: String},
    tipo: {type: String},
    imagen: {type: String}
  }
);

module.exports = mongoose.model('Plantas', plantaModel,'plants');