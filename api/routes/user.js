'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

//api.get();
api.get('/home',UserController.home);
api.get('/pruebas',UserController.pruebas);
api.post('/register',UserController.saveUser);
api.post('/login',UserController.loginUser);
api.get('/user/:id',  UserController.getUser);
api.put('/updateuser/:id',  UserController.updateUser);

module.exports = api;

