'use strict'

var express = require('express');
var PublicationController = require('../controllers/publication');

var api = express.Router();

//api.get();
api.get('/homepublication',PublicationController.home);
api.post('/registerpublication',PublicationController.savePublication);
api.get('/publication/:id',  PublicationController.getPublication);
api.put('/updatepublication/:id',  PublicationController.updatePublication);

module.exports = api;