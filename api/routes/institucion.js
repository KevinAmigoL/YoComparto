'use strict'

var express = require('express');
var InstitucionController = require('../controllers/institucion');

var api = express.Router();

//api.get();
api.get('/homeinstitucion',InstitucionController.home);
api.post('/registerinstitucion',InstitucionController.saveInstitucion);
api.get('/institucion/:id',  InstitucionController.getInstitucion);


module.exports = api;