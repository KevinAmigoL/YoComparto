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








//Funciones/metodos a exportar para utilizar en otros ficheros------------------------------------------------------------------------------
module.exports = {
home,
saveDenuncia,

}