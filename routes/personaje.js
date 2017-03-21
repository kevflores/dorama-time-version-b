var express = require('express');
var router = express.Router();

router.get('/registro', function(req, res, next) {
  res.render('personaje/registro', { title: 'Registro de Personaje', registroActive: true, regPersonajeActive: true });
});

router.get('/consulta', function(req, res, next) {
  res.render('personaje/consulta', { title: 'Consulta de Personaje', consultaActive: true, conPersonajeActive: true  });
});

module.exports = router;
