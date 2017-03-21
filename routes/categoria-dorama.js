var express = require('express');
var router = express.Router();

router.get('/registro', function(req, res, next) {
  res.render('categoria-dorama/registro', { title: 'Registro de Categoria de Dorama', registroActive: true, regCatDoramaActive: true });
});

router.get('/consulta', function(req, res, next) {
  res.render('categoria-dorama/consulta', { title: 'Consulta de Categoria de Dorama', consultaActive: true, conCatDoramaActive: true });
});

module.exports = router;
