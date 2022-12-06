'use strict'

var bCrypt = require('bcrypt-nodejs')
var User = require('../models/user');

function home(req, res)  {
	res.status(200).send({
		message: 'hola mundo desde servidor NodeJS interfaz usuarios'
	});
}


function pruebas(req, res)  {
	console.log(req.body);
	res.status(200).send({
		message: 'Accion de pruebas servidor NodeJS'
	});
}

//funcion para guardar usuarios---------------------------------------------------------------
function saveUser(req, res)  {
var params = req.body;
var user = new User();

if (params.name && params.surname && params.nick &&
	params.email && params.password) {

	user.name = params.name;
	user.surname = params.surname;
	user.nick = params.nick;
	user.email = params.email;
	user.role = 'ROLE_USER';
	user.image = null;


//Control de usuarios duplicados-------------------------------------------
User.find ({ $or: [
	{email: user.email.toLowerCase()},
	{nick: user.nick.toLowerCase()}

	]}).exec((err, users) =>  {

		if(err) return res.status(500).send({message: 'Error en la peticion de usuarios'});
		if (users && users.length >= 1) {
		return res.status(200).send({message: 'Email y/o nick ya se encuentran registrados en sistema'});
	
	}else{

		//Encriptado de contraseña y guardado de datos---------------------------------------------------------------
bCrypt.hash(params.password, null, null,(err, hash)  => {
user.password = hash;

user.save((err, userStored) => {
	if(err) return res.status(500).send({message: 'Error al guardar usuario'});

	if(userStored){
		res.status(200).send({user: userStored});
	}else{
		res.status(404).send({message: 'no se a registrado el usuario'});
}
});
});
}
});

	}else{
	res.status(200).send({
		message:'rellena todos los campos nesesarios'

	});
}
}






//Metodo de Control de accesos------------------------------------------------
function loginUser (req, res){

var params = req.body;
var email = params.email;
var password = params.password;

User.findOne({email: email}, (err, user) => {
	if(err) return res.status(500).send({message: 'Error en la peticion'});

if (user){
	bCrypt.compare(password, user.password, (err, check) => {
	if(check){
	//devolver datos de usuario
	user.password = undefined;
	return res.status(200).send({user})
	}else{
	return res.status(404).send({message: 'el usuario no se a podido identificar'});	
	}
});
}else{
	return res.status(404).send({message: 'el usuario no se a podido identificar!!'});
}
});
}


//metodo consultar datos de usuario
function getUser(req, res) {
	var userId = req.params.id;

	User.findById(userId, (err, user) => {


	if(err) return res.status(500).send({message: 'Error en la peticion'});
	if(!user) return res.status(404).send({message: 'Usuario no encontrado'});
	return res.status(200).send({user});

});
}


//metodo update datos usuario
function updateUser (req, res){
	var userId = req.params.id;
	var update = req.body;

	//borrar propiedad de password
	delete update.password;

	//if(userId != req.user.sub){
		//return res.status(500).send({ message:'no tienes permiso para actualizar datos de este usuario'});

	//}

	User.findByIdAndUpdate(userId, update, {new:true}, (err, userUpdated) => {
		if (err) return res.status(500).send({message:'error en la peticion'});
		if(!userUpdated) return res.status(404).send({message:'no se a podido actualizar el usuario'});
		return res.status(200).send({user:userUpdated});
	});
}





//Funciones/metodos a exportar para utilizar en otros ficheros------------------------------------------------------------------------------
module.exports = {
home,
pruebas,
saveUser,
loginUser,
getUser,
updateUser
}