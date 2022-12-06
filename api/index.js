'use strict'

var mongoose = require('mongoose');

//-------------------
var app = require('./app');
var port = 3800;
//-------------------


//Conexion database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/proyecto_quiero_compartir',)
		.then(()  => {
				console.log("conexion ok");


			//crear servidor

			app.listen(port, () => {
			console.log("Servidor corriendo en http.localhost:3800");






			});
		})
		.catch(err => console.log(err));