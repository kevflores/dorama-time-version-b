var express                   = require('express');
var router                    = express.Router();
//var CategoriaDorama = require('../models/categoria-dorama');
var CategoriaDoramaController = require('../controllers/categoria-dorama');


// Vista de Registro de Categoría de Dorama.
router.get('/registro', function(req, res, next) {
  res.render('categoria-dorama/registro', { title: 'Registro de Categoría de Dorama', registroActive: true, regCatDoramaActive: true });
});

// Vista de Consulta de Categoría de Dorama.
router.get('/consulta', function(req, res, next) {
  res.render('categoria-dorama/consulta', { title: 'Consulta de Categoría de Dorama', consultaActive: true, conCatDoramaActive: true });
});

// Ver vista con información de una Categoría de Dorama.
router.get('/:id/informacion', function(req, res, next) {

});






// Inserción de Nueva Categoría de Dorama.
router.post('/', function(req, res, next) {
  
	// Se invoca la función correspondiente del Controlador.
	// Se validan los datos del formulario.
  console.log(req.body); // Imprimiendo los datos del formulario.
  console.log(CategoriaDoramaController); // Imprimiendo las funciones contenidas en el controller.

  var titulo = req.body.titulo;
  var descripcion = req.body.descripcion;
  var codigoPais = req.body.pais;

  var datosCorrectos = CategoriaDoramaController.validarDatos(titulo, descripcion, codigoPais);

  if ( datosCorrectos ) {
    // Se inserta el nuevo documento en la colección.
    var idDocumento = CategoriaDoramaController.guardarDatos(titulo, descripcion, codigoPais);

    if ( idDocumento ) {
      // Si todo está bien, entonces se redirecciona a la misma 
      // página de REGISTRO mostrando un mensaje de "registro satisfactorio"
      // incluyendo el link para hacer la consulta de dicho registro.
      return res.render('categoria-dorama/registro', { 
        title: 'Registro de Categoría de Dorama', 
        mensajeSuccess: true,
        idCategoriaDorama: idDocumento,
        registroActive: true, 
        regCatDoramaActive: true 
      });
    } else {
      // En caso contrario, se muestra un mensaje de registro no satisfactorio
      // especificando las razones.
      res.render('categoria-dorama/registro', { 
        title: 'Registro de Categoría de Dorama', 
        mensajeError: true,
        razonesError: "Error al intentar guardar los datos.",
        registroActive: true, 
        regCatDoramaActive: true 
      });
    }
  } else {
    // En caso contrario, se muestra un mensaje de registro no satisfactorio
    // especificando las razones.
    res.render('categoria-dorama/registro', { 
      title: 'Registro de Categoría de Dorama', 
      mensajeError: true,
      razonesError: "Por favor, verifique los datos ingresados.",
      registroActive: true, 
      regCatDoramaActive: true 
    });
  }
 
});









// Actualización de documento/registro de Categoría de Dorama.
router.put('/:id', function(req, res, next) {

});

// Eliminación de documento/registro de Categoría de Dorama.
router.delete('/:id', function(req, res, next) {

});

module.exports = router;
