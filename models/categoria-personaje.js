var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriaPersonajeSchema = new Schema({
	titulo: {
		type: String, 
		required[true,'El título de la Categoría de Personaje es obligatorio.']
	},
	descripcion: {
		type: String, 
		required[true,'La descripción de la Categoría de Personaje es obligatoria.']
	}
}, { collection: 'categoria_personaje' });

module.exports = mongoose.model('CategoriaPersonaje', CategoriaPersonajeSchema);