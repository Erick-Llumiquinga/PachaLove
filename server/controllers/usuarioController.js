const express = require('express');
const User = require('../models/userModel')
const routerApi = express.Router();

routerApi.route('/getDataUser')
  .get((req, res) => {
    let correo = req.query.correo
    console.log(correo)
    User.findOne({'correo': correo} , (err,resp) => {
      if(err){
        return res.json(err);
      }
      console.log(resp)
      return res.json(resp)
    })
  });

routerApi.route('/login')
  .post((req, res) => {
    User.findOne({nombre: req.body.nombre}, (err, resp) => {
      if(err){
        return res.json(err);
      }
      else if(req.body.clave === resp.clave){
        return res.send('Loggeded') 
      }
      else{
        return res.send("Usuario no encontrado");
      }
    })
  });

module.exports = routerApi;

