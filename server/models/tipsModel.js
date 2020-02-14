const mongoose = require('mongoose');

const { Schema } = mongoose;

const TipsModel = new Schema(
  {
    titulo: {type: String},
    descripcion: {type: String},
    imagen: {type: String},
    contenido: {type: String}
  }
);

module.exports = mongoose.model('Tips', TipsModel,'Tips');