'use strict'

var express = require('express');
var DenunciaController = require('../controllers/denuncia');

var api = express.Router();

//api.get();
api.get('/home',DenunciaController.home);
api.post('/registerdenuncia',DenunciaController.saveDenuncia);
api.get('/denuncia/:id',  DenunciaController.getDenuncia);


module.exports = api;