'use strict'

var express = require('express');
var PublicationController = require('../controllers/publication');

var api = express.Router();

//api.get();
api.get('/homepublication',PublicationController.home);
api.post('/registerpublication',PublicationController.savePublication);



module.exports = api;