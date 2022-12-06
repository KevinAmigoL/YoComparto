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








//Funciones/metodos a exportar para utilizar en otros ficheros------------------------------------------------------------------------------
module.exports = {
home,
saveCarrera,

}