'use strict'

var express = require('express');
var CarreraController = require('../controllers/carrera');

var api = express.Router();

//api.get();
api.get('/homecarrera',CarreraController.home);
api.post('/registercarrera',CarreraController.saveCarrera);



module.exports = api;