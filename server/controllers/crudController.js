const express = require('express');
const mongoose = require('mongoose');
const User = require('../db/models/userModel')
const routerApi = express.Router();
const db = mongoose.connect('mongodb://localhost/PachaLove');

routerApi.route('/register')
  .post((req, res) => {
    let usuario = new User(req.body)

    usuario.save((err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.json(resp)
    })
  });
