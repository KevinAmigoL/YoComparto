'use strict'


var Carrera = require('../models/carrera');

function home(req, res)  {
	res.status(200).send({
		message: 'hola mundo desde servidor NodeJS interfaz usuarios'
	});
}




//funcion para guardar usuarios---------------------------------------------------------------
function saveCarrera(req, res)  {
var params = req.body;
var carrera = new Carrera();

if (params.name && params.ramo && params.institucion) {

	carrera.name = params.name;
	carrera.ramo = params.ramo;
	carrera.institucion = params.institucion;
	


carrera.save((err, carreraStored) => {
	if(err) return res.status(500).send({message: 'La creación no ha podido realizarse por favor verifique los datos'});

	if(carreraStored){
		res.status(200).send({carrera: carreraStored});
	}else{
		res.status(404).send({message: 'La creación no ha podido realizarse por favor verifique los datos'});
}

});


	}else{
	res.status(200).send({
		message:'La creación no ha podido realizarse por favor verifique los datos'

	});
}
}

//metodo consultar datos de usuario
function getCarrera(req, res) {
	var carreraId = req.params.id;

	Carrera.findById(carreraId, (err, carrera) => {


	if(err) return res.status(500).send({message: 'Error en la peticion'});
	if(!carrera) return res.status(404).send({message: 'Usuario no encontrado'});
	return res.status(200).send({carrera});

});
}








//Funciones/metodos a exportar para utilizar en otros ficheros------------------------------------------------------------------------------
module.exports = {
home,
saveCarrera,
getCarrera
}