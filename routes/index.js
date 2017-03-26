var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DoramaTime! Version B', inicioActive: true });
});

router.get('/acerca-de', function(req, res, next) {
  res.render('acerca-de', { title: '¡Acerca de la App!', acercaDeActive: true });
});

module.exports = router;
