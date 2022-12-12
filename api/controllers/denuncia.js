'use strict'


var Denuncia = require('../models/denuncia');


//funcion para guardar denuncias---------------------------------------------------------------
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



//metodo consultar datos denuncias---------------------------------------------------------------------------------------------------------
function getDenuncia(req, res) {
	var denunciaId = req.params.id;

	Denuncia.findById(denunciaId, (err, denuncia) => {


	if(err) return res.status(500).send({message: 'Error en la peticion'});
	if(!denuncia) return res.status(404).send({message: 'Usuario no encontrado'});
	return res.status(200).send({denuncia});

});
}


//metodo update datos denuncia--------------------------------------------------------------------------------------------------------------
function updateDenuncia (req, res){
	var denunciaId = req.params.id;
	var update = req.body;

	//borrar propiedad de password
	//delete update.password;

	//if(userId != req.user.sub){
		//return res.status(500).send({ message:'no tienes permiso para actualizar datos de este usuario'});

	//}

	Denuncia.findByIdAndUpdate(denunciaId, update, {new:true}, (err, denunciaUpdated) => {
		if (err) return res.status(500).send({message:'error en la peticion'});
		if(!denunciaUpdated) return res.status(404).send({message:'no se a podido actualizar el usuario'});
		return res.status(200).send({denuncia:denunciaUpdated});
	});
}



//Funciones/metodos a exportar para utilizar en otros ficheros------------------------------------------------------------------------------
module.exports = {
saveDenuncia,
getDenuncia,
updateDenuncia
}