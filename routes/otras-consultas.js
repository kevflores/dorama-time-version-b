var express = require('express');
var router = express.Router();

router.get('/otras-consultas', function(req, res, next) {
  res.render('otras-consultas/index', { title: 'API: Otras Consultas', otrasConsultasActive: true });
});

router.get('/listado-actores', function(req, res, next) {
  res.send({objeto: 'hola'});
});

router.get('/listado-doramas', function(req, res, next) {
  res.send({objeto: 'hola'});
});

router.get('/dorama-del-dia', function(req, res, next) {
  res.send({objeto: 'hola'});
});

router.get('/dorama-coreano-del-dia', function(req, res, next) {
  res.send({objeto: 'hola'});
});

router.get('/dorama-japones-del-dia', function(req, res, next) {
  res.send({objeto: 'hola'});
});

router.get('/actor-coreano-del-dia', function(req, res, next) {
  res.send({objeto: 'hola'});
});

router.get('/actriz-coreana-del-dia', function(req, res, next) {
  res.send({objeto: 'hola'});
});

router.get('/actor-japones-del-dia', function(req, res, next) {
  res.send({objeto: 'hola'});
});

router.get('/actriz-japonesa-del-dia', function(req, res, next) {
  res.send({objeto: 'hola'});
});

router.get('/listado-actores-por-parametro', function(req, res, next) {
  res.send({objeto: 'hola'});
});

router.get('/listado-doramas-por-parametro', function(req, res, next) {
  res.send({objeto: 'hola'});
});

module.exports = router;
