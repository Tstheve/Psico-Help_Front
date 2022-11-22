const { Router } = require('express');
const router = Router();

const controllersHome = require('../controllers/home');
router.get('/', controllersHome.home);

router.get('/libros', controllersHome.libros);

router.get('/login', controllersHome.login);

router.get('/mensajes', controllersHome.mensajes);

router.get('/psicologo', controllersHome.psicologo);

router.get('/registro', controllersHome.registro);

router.get('/test', controllersHome.test);

router.get('/ubicacion', controllersHome.ubicacion);

module.exports = router;