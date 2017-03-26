var express = require('express');
var CategoriaDorama = require('../models/categoria-dorama');

module.exports = {

  validarDatos: function(titulo, descripcion, codigoPais) {
    console.log("Validando datos.");
    return true;
  },
  guardarDatos: function(titulo, descripcion, codigoPais) {
    console.log("Guardando datos.");
    return 1;
  },
  modificarDatos: function(){

  },
  eliminarDocumento: function(){

  }


};
