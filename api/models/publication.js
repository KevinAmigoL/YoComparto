'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PublicationSchema = Schema({
	name: String,
	description: String,
	user: String,
	institucion: String,
	carrera: String,
	contenido: String,
	ramo: String,
	file: String
});

module.exports = mongoose.model('Publication', PublicationSchema);