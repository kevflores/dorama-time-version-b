var express = require('express');
var CategoriaDorama = require('../models/categoria-dorama');


// Función para identificar el país a registrar
function identificarPais(codigoPais) {
  switch (codigoPais) {
    case 1: 
      return "Corea Del Sur";
    case 2: 
      return "Japón";
    case 3: 
      return "Taiwán";  
    case 4: 
      return "China";  
    case 5: 
      return "Hong Kong";  
    case 6: 
      return "Singapur";  
    case 7: 
      return "Filipinas";  
    default:
      return "Desconocido"; //NULL
  }
}


// Función para guardar los datos de una nueva Categoría de Dorama en la BD.
function guardarDatos(req, res) {
  console.log("Guardando datos: "+req.body.titulo+", "+req.body.descripcion+" y "+req.body.pais);
  
  var categoriaDorama = new CategoriaDorama({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    pais: identificarPais(parseInt(req.body.pais))
  });

  categoriaDorama.save(function(err){
    if (err) {
      return res.render('categoria-dorama/registro', { 
        title: 'Registro de Categoría de Dorama', 
        mensajeError: true,
        razonesError: "Error al intentar guardar los datos: "+err.message,
        registroActive: true, 
        regCatDoramaActive: true 
      });
    }
    return res.render('categoria-dorama/registro', { 
      title: 'Registro de Categoría de Dorama', 
      mensajeSuccess: true,
      idCategoriaDorama: categoriaDorama.id,
      registroActive: true, 
      regCatDoramaActive: true 
    });
  });
};


// Función para validar si un objeto JSON está vacío.
function isEmpty(obj) {

  if (obj == null) return true;

  if (obj.length > 0)    return false;
  if (obj.length === 0)  return true;

  if (typeof obj !== "object") return true;

  for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
  }

  return true;
}

module.exports = {

  // Consultar todas las categorías de dorama registradas.
  consultarTodas: function (req, res) {
    CategoriaDorama.find({}, function(err, categorias) {
      if (err) {
        return res.write('Error en consulta!');
      }
      return res.render('categoria-dorama/consulta', { 
        title: 'Categorías de Doramas',
        consultaActive: true, 
        conCatDoramaActive: true,
        categorias: categorias
      });
    });
  },

  // Consultar la información de una categporía de dorama específica.
  consultar: function (req, res) {
    var categoriaId = req.params.id;
    CategoriaDorama.findById(categoriaId, function(err, categoria) {
      if ( err || !categoria ) {
         return res.redirect('/');
      }
      return res.render('categoria-dorama/informacion', { 
        title: categoria.titulo,
        consultaActive: true, 
        conCatDoramaActive: true,
        categoriaDorama: categoria
      });
    });
  },

  // Realizar la inserción de un nuevo documento en la colección "categoria-dorama".
  registrar: function (req, res) {
    console.log("Validando datos: "+req.body.titulo+", "+req.body.descripcion+" y "+req.body.pais);
    // Validar datos AQUÍ con express-validator.
    req.sanitize('titulo').trim();
    req.sanitize('descripcion').trim();
    req.check({
      'titulo': {
        notEmpty: true,
        errorMessage: 'Debe ingresar el título de la categoría.' 
      },
      'descripcion': {
        notEmpty: true,
        errorMessage: 'Debe ingresar la descripción de la categoría.' 
      },
      'pais': { 
        notEmpty: true,
        isInt: {
          options: [{ min: 1, max: 7 }]        },
        errorMessage: 'Debe seleccionar un país válido.'
      }
    });

    req.getValidationResult().then(function(result) {
      var errores = result.mapped();
      if ( !isEmpty(errores) ) {
        console.log("Hay errores");
        // En caso de que algunos o todos los datos no sean válidos, 
        // se muestra un mensaje de registro no satisfactorio especificando las razones.
        return res.render('categoria-dorama/registro', { 
          title: 'Registro de Categoría de Dorama', 
          mensajeError: true,
          razonesError: "Por favor, verifique los datos ingresados: ",
          errores: errores,
          registroActive: true, 
          regCatDoramaActive: true,
          datosInput: req
        });
      } else {
        console.log("Sin errores");
        guardarDatos(req, res);
      }
    });
    console.log("Fuera de la validación.")
  },

  // Realizar la modificación de un documento existente en la colección "categoria-dorama".
  modificar: function(){
    return res.render('categoria-dorama/registro', { 
      title: 'Registro de Categoría de Dorama', 
      mensajeError: true,
      razonesError: "MODIFICACIÓN",
      registroActive: true, 
      regCatDoramaActive: true 
    });
  },

  // Eliminar un documento de la colección "categoria-dorama".
  eliminar: function(){
    return res.render('categoria-dorama/registro', { 
      title: 'Registro de Categoría de Dorama', 
      mensajeError: true,
      razonesError: "ELIMINACIÓN",
      registroActive: true, 
      regCatDoramaActive: true 
    });
  }

};
