'use strict'


var Denuncia = require('../models/denuncia');

function home(req, res)  {
	res.status(200).send({
		message: 'hola mundo desde servidor NodeJS interfaz usuarios'
	});
}




//funcion para guardar usuarios---------------------------------------------------------------
function saveDenuncia(req, res)  {
var params = req.body;
var denuncia = new Denuncia();

if (params.motivo && params.descripcion) {

	denuncia.motivo = params.motivo;
	denuncia.descripcion = params.descripcion;
		

denuncia.save((err, denunciaStored) => {
	if(err) return res.status(500).send({message: 'La creación no ha podido realizarse por favor verifique los datos'});

	if(denunciaStored){
		res.status(200).send({denuncia: denunciaStored});
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
function getDenuncia(req, res) {
	var denunciaId = req.params.id;

	Denuncia.findById(denunciaId, (err, denuncia) => {


	if(err) return res.status(500).send({message: 'Error en la peticion'});
	if(!denuncia) return res.status(404).send({message: 'Usuario no encontrado'});
	return res.status(200).send({denuncia});

});
}





//Funciones/metodos a exportar para utilizar en otros ficheros------------------------------------------------------------------------------
module.exports = {
home,
saveDenuncia,
getDenuncia
}