'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DenunciaSchema = Schema({
	motivo: String,
	descripcion: String
});

module.exports = mongoose.model('Denuncia', DenunciaSchema);