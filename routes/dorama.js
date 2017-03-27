var express = require('express');
var router = express.Router();

router.get('/registro', function(req, res, next) {
  res.render('dorama/registro', { 
  	title: 'Registro de Dorama', 
  	registroActive: true, 
  	regDoramaActive: true,
  	datePicker: true 
  });
});

router.get('/consulta', function(req, res, next) {
  res.render('dorama/consulta', { title: 'Consulta de Dorama', consultaActive: true, conDoramaActive: true });
});

module.exports = router;
