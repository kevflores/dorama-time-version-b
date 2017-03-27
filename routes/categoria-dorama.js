var express                   = require('express');
var router                    = express.Router();
var CategoriaDoramaController = require('../controllers/categoria-dorama');

// Ver vista de Registro de Categoría de Dorama.
router.get('/registro', function(req, res, next) {
  res.render('categoria-dorama/registro', { title: 'Registro de Categoría de Dorama', registroActive: true, regCatDoramaActive: true });
});

// Ver vista de Consulta de Categoría de Dorama.
router.get('/consulta', function(req, res, next) {
  CategoriaDoramaController.consultarTodas(req, res);
});

// Ver vista de Información de una Categoría de Dorama.
router.get('/:id/informacion', function(req, res, next) {
  CategoriaDoramaController.consultar(req, res);
});

// Registro de Nueva Categoría de Dorama.
router.post('/', function(req, res, next) {
  CategoriaDoramaController.registrar(req, res);
});

// Actualización de documento/registro de Categoría de Dorama.
router.put('/:id', function(req, res, next) {

});

// Eliminación de documento/registro de Categoría de Dorama.
router.delete('/:id', function(req, res, next) {

});

module.exports = router;
