var express = require('express');
var router = express.Router();

router.get('/registro', function(req, res, next) {
  res.render('categoria-personaje/registro', { title: 'Registro de Categoría de Personaje', registroActive: true, regCatPersonajeActive: true });
});

router.get('/consulta', function(req, res, next) {
  res.render('categoria-personaje/consulta', { title: 'Consulta de Categoría de Personaje', consultaActive: true, conCatPersonajeActive: true });
});

module.exports = router;
