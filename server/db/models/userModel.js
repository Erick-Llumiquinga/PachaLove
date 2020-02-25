const mongoose = require('mongoose');

const { Schema } = mongoose;

const usuarioModel = new Schema(
  {
    nombre: {type: String},
    correo: {type: String},
    clave: {type: String},
    img: {type:String}
  }
);

module.exports = mongoose.model('Usuarios', usuarioModel,'Users');