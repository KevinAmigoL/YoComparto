'use strict'


var Institucion = require('../models/institucion');

function home(req, res)  {
	res.status(200).send({
		message: 'hola mundo desde servidor NodeJS interfaz usuarios'
	});
}




//funcion para guardar usuarios---------------------------------------------------------------
function saveInstitucion(req, res)  {
var params = req.body;
var institucion = new Institucion();

if (params.name && params.tipo && params.direccion && params.pagina) {

	institucion.name = params.name;
	institucion.tipo = params.tipo;
	institucion.direccion = params.direccion;
	institucion.pagina = params.pagina;
	


institucion.save((err, institucionStored) => {
	if(err) return res.status(500).send({message: 'La creación no ha podido realizarse por favor verifique los datos'});

	if(institucionStored){
		res.status(200).send({institucion: institucionStored});
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
function getInstitucion(req, res) {
	var institucionId = req.params.id;

	Institucion.findById(institucionId, (err, institucion) => {


	if(err) return res.status(500).send({message: 'Error en la peticion'});
	if(!institucion) return res.status(404).send({message: 'Usuario no encontrado'});
	return res.status(200).send({institucion});

});
}



//metodo update datos usuario
function updateInstitucion (req, res){
	var institucionId = req.params.id;
	var update = req.body;

	//borrar propiedad de password
	//delete update.password;

	//if(userId != req.user.sub){
		//return res.status(500).send({ message:'no tienes permiso para actualizar datos de este usuario'});

	//}

	Institucion.findByIdAndUpdate(institucionId, update, {new:true}, (err, institucionUpdated) => {
		if (err) return res.status(500).send({message:'error en la peticion'});
		if(!institucionUpdated) return res.status(404).send({message:'no se a podido actualizar el usuario'});
		return res.status(200).send({institucion:institucionUpdated});
	});
}




//Funciones/metodos a exportar para utilizar en otros ficheros------------------------------------------------------------------------------
module.exports = {
home,
saveInstitucion,
getInstitucion,
updateInstitucion
}




