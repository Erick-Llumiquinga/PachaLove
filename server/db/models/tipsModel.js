const mongoose = require('mongoose');

const { Schema } = mongoose;

const Tip = new Schema(
  {
    titulo: {type: String},
    descripcion: {type: String},
    imagen: {type: String},
    contenido: {type: String}
  }
);

module.exports = mongoose.model('Tips', Tip);