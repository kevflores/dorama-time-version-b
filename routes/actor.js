var express = require('express');
var router = express.Router();

router.get('/registro', function(req, res, next) {
  res.render('actor/registro', { 
  	title: 'Registro de Actor/Actriz', 
  	registroActive: true, 
  	regActorActive: true,
  	datePicker: true 
  });
});

router.get('/consulta', function(req, res, next) {
  res.render('actor/consulta', { title: 'Consulta de Actor/Actriz', consultaActive: true, conActorActive: true });
});

module.exports = router;
