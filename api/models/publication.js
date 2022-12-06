'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PublicationSchema = Schema({
	name: String,
	description: String,
	create_at: String,
	user: {tipe:Schema.ObjectId, ref:'User'},
	institucion: {tipe:Schema.ObjectId, ref:'Institucion'},
	carrera: {tipe:Schema.ObjectId, ref:'Carrera'},
	contenido: String,
	ramo: String,
	file: String
});

module.exports = mongoose.model('Publication', PublicationSchema);