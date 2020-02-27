const mongoose = require('mongoose');

const { Schema } = mongoose;

const Suelo = new Schema(
  {
    nombre: {type: String},
    descripcion: {type: String},
    tratamiento: {type: String},
    imagen: {type: String},
  }
);

module.exports = mongoose.model('Suelos', Suelo);