'use strict'

var Publication = require('../models/publication');

//funcion para guardar publicaciones-----------------------------------------------------------------------------------------------------------
function savePublication(req, res)  {
var params = req.body;
var publication = new Publication();

if (params.name && params.description && params.user &&  params.institucion && params.carrera && params.contenido && params.ramo && params.file) {

	publication.name = params.name;
	publication.description = params.description;
	publication.user = params.user;
	publication.institucion = params.institucion;
	publication.carrera = params.carrera;
	publication.contenido = params.contenido;
	publication.ramo = params.ramo;
	publication.file = params.file;

	
publication.save((err, publicationStored) => {
	if(err) return res.status(500).send({message: 'La creación no ha podido realizarse por favor verifique los datos'});

	if(publicationStored){
		res.status(200).send({publication: publicationStored});
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



//metodo consultar datos de publicaciones--------------------------------------------------------------------------------------------------------------------
function getPublication(req, res) {
	var publicationId = req.params.id;

	Publication.findById(publicationId, (err, publication) => {


	if(err) return res.status(500).send({message: 'Error en la peticion'});
	if(!publication) return res.status(404).send({message: 'Usuario no encontrado'});
	return res.status(200).send({publication});

});
}

//metodo update publicaciones---------------------------------------------------------------------------------------------------------------------------------
function updatePublication (req, res){
	var publicationId = req.params.id;
	var update = req.body;

	//borrar propiedad de password
	//delete update.password;

	//if(userId != req.user.sub){
		//return res.status(500).send({ message:'no tienes permiso para actualizar datos de este usuario'});

	//}

	Publication.findByIdAndUpdate(publicationId, update, {new:true}, (err, publicationUpdated) => {
		if (err) return res.status(500).send({message:'error en la peticion'});
		if(!publicationUpdated) return res.status(404).send({message:'no se a podido actualizar el usuario'});
		return res.status(200).send({publication:publicationUpdated});
	});
}



//Funciones/metodos a exportar para utilizar en otros ficheros-------------------------------------------------------------------------------------------------
module.exports = {
savePublication,
getPublication,
updatePublication 
}