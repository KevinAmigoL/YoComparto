'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarreraSchema = Schema({
	name: String,
	ramo: String,
	institucion: String,

	
});

module.exports = mongoose.model('Carrera', CarreraSchema);