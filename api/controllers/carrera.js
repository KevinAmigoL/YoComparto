'use strict'

var Carrera = require('../models/carrera');


//funcion para guardar carreras------------------------------------------------------------------------------------------------------------
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


//metodo consultar datos Carrera------------------------------------------------------------------------------------------------------------
function getCarrera(req, res) {
	var carreraId = req.params.id;

	Carrera.findById(carreraId, (err, carrera) => {


	if(err) return res.status(500).send({message: 'Error en la peticion'});
	if(!carrera) return res.status(404).send({message: 'Usuario no encontrado'});
	return res.status(200).send({carrera});

});
}

//metodo update datos carrera----------------------------------------------------------------------------------------------------------------
function updateCarrera (req, res){
	var carreraId = req.params.id;
	var update = req.body;

	//borrar propiedad de password
	//delete update.password;

	//if(userId != req.user.sub){
		//return res.status(500).send({ message:'no tienes permiso para actualizar datos de este usuario'});

	//}

	Carrera.findByIdAndUpdate(carreraId, update, {new:true}, (err, carreraUpdated) => {
		if (err) return res.status(500).send({message:'error en la peticion'});
		if(!carreraUpdated) return res.status(404).send({message:'no se a podido actualizar el usuario'});
		return res.status(200).send({carrera:carreraUpdated});
	});
}




//Funciones/metodos a exportar para utilizar en otros ficheros----------------------------------------------------------------------------------
module.exports = {
saveCarrera,
getCarrera,
updateCarrera
}