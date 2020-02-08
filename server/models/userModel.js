const mongoose = require('mongoose');

const { Schema } = mongoose;

const usuarioModel = new Schema(
  {
    nombre: {type: String},
    apellido: {type: String},
    correo: {type: String},
    clave: {type: String}
  }
);

module.exports = mongoose.model('Usuarios', usuarioModel,'Users');