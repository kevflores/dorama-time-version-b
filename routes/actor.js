var express = require('express');
var router = express.Router();

router.get('/registro', function(req, res, next) {
  res.render('actor/registro', { title: 'Registro de Actor', registroActive: true, regActorActive: true });
});

router.get('/consulta', function(req, res, next) {
  res.render('actor/consulta', { title: 'Consulta de Actor', consultaActive: true, conActorActive: true });
});

module.exports = router;
