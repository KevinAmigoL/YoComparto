'use strict'

var express = require('express');
var DenunciaController = require('../controllers/denuncia');

var api = express.Router();

//rutas
api.post('/registerdenuncia',DenunciaController.saveDenuncia);
api.get('/denuncia/:id',  DenunciaController.getDenuncia);
api.put('/updatedenuncia/:id',  DenunciaController.updateDenuncia);

module.exports = api;