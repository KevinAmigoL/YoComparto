'use strict'

var express = require('express');
var CarreraController = require('../controllers/carrera');

var api = express.Router();

//rutas
api.post('/registercarrera',CarreraController.saveCarrera);
api.get('/carrera/:id',  CarreraController.getCarrera);
api.put('/updatecarrera/:id',  CarreraController.updateCarrera);

module.exports = api;