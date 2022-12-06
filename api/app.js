'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar tutas
var user_routes = require('./routes/user');
var carrera_routes = require('./routes/carrera');
var institucion_routes = require('./routes/institucion');
var denuncia_routes = require('./routes/denuncia');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors

//rutas
app.use('/api', user_routes);
app.use('/api', carrera_routes);
app.use('/api', institucion_routes);
app.use('/api', denuncia_routes);

//exportar
module.exports = app;
