'use strict'

var Publication = require('../models/publication');

function home(req, res)  {
	res.status(200).send({
		message: 'hola mundo desde servidor NodeJS interfaz usuarios'
	});
}




//funcion para guardar usuarios---------------------------------------------------------------
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



//metodo consultar datos de usuario
function getPublication(req, res) {
	var publicationId = req.params.id;

	Publication.findById(publicationId, (err, publication) => {


	if(err) return res.status(500).send({message: 'Error en la peticion'});
	if(!publication) return res.status(404).send({message: 'Usuario no encontrado'});
	return res.status(200).send({publication});

});
}






//Funciones/metodos a exportar para utilizar en otros ficheros------------------------------------------------------------------------------
module.exports = {
home,
savePublication,
getPublication
}