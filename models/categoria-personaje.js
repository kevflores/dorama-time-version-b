var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriaPersonajeSchema = new Schema({
	descripcion: {type: String, required[true, 'La descripción de la Categoría de Personaje es obligatoria.']}
});

module.exports = mongoose.model('CategoriaPersonaje', CategoriaPersonajeSchema);