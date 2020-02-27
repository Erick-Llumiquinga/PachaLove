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

  routerApi.route('/updateDataUser')
  .put((req, res) => {
    let id = req.body.id
    let Query = req.body

    TipsModel.updateOne({'_id': id}, Query, (err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });

module.exports = routerApi;

