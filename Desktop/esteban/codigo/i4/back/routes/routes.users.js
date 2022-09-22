const { Router } = require('express');
const { getUsers, getPosts, getPhotos } = require('../controllers/controllers.users');
const router = Router();

// listar usuarios
/**
* Post track
* @openapi
* /accounts:
*    get:
*      tags:
*        - accounts
*      summary: "Listar usuarios"
*      description: Este endpoint es para listar todos los usuarios
*/
router.get('/users', getUsers);

// listar publicaciones
/**
* Post track
* @openapi
* /accounts:
*    get:
*      tags:
*        - accounts
*      summary: "Listar publicaciones"
*      description: Este endpoint es para listar todas las pupblicaciones
*/
router.get('/posts', getPosts);

// listar fotos
/**
* Post track
* @openapi
* /accounts:
*    get:
*      tags:
*        - accounts
*      summary: "Listar fotos"
*      description: Este endpoint es para listar todas las fotos
*/
router.get('/photos', getPhotos);


module.exports = router;
