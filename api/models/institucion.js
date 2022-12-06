'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InstitucionSchema = Schema({
	name: String,
	tipo: String,
	direccion: String,
	pagina: String
	
});

module.exports = mongoose.model('Institucion', InstitucionSchema);