var express = require('express');
var CategoriaDorama = require('../models/categoria-dorama');


// Función para validar los datos del registro de una nueva Categoría de Dorama.
function validarDatos(req, res) {
  console.log("Validando datos: "+req.body.titulo+", "+req.body.descripcion+" y "+req.body.pais);
  // Validar datos AQUÍ.
  return true;

  // En caso de que los datos no sean válidos, se muestra un mensaje de registro no satisfactorio
  // especificando las razones.
  return res.render('categoria-dorama/registro', { 
    title: 'Registro de Categoría de Dorama', 
    mensajeError: true,
    razonesError: "Por favor, verifique los datos ingresados.",
    registroActive: true, 
    regCatDoramaActive: true 
  });
};


// Función para guardar los datos de una nueva Categoría de Dorama en la BD.
function guardarDatos(req, res) {
  console.log("Guardando datos: "+req.body.titulo+", "+req.body.descripcion+" y "+req.body.pais);
  
  var categoriaDorama = new CategoriaDorama({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    pais: "Corea Del Sur" 
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


module.exports = {

  consultarTodas: function (req, res) {
    CategoriaDorama.find({}, function(err, categorias) {
      if (err) {
        return res.write('Error en consulta!');
      }
      return res.render('categoria-dorama/consulta', { 
        title: 'Consulta de Categoría de Dorama',
        consultaActive: true, 
        conCatDoramaActive: true,
        categorias: categorias
      });
    });
  },

  consultar: function (req, res) {
    var categoriaId = req.params.id;
    CategoriaDorama.findById(categoriaId, function(err, categoria) {
      if (err) {
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

  registrar: function (req, res) {
    var datosCorrectos = validarDatos(req, res);
    if ( datosCorrectos ) {
      guardarDatos(req, res);
    }
  },

  modificar: function(){
    return res.render('categoria-dorama/registro', { 
      title: 'Registro de Categoría de Dorama', 
      mensajeError: true,
      razonesError: "MODIFICACIÓN",
      registroActive: true, 
      regCatDoramaActive: true 
    });
  },

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
