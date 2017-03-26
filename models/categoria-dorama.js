var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriaDoramaSchema = new Schema({
	titulo: {
		type: String,
		required: [true, 'El título de la categoría es obligatorio.']
	},
	pais: {
		type: String, 
		required: [true, 'El país asociado a la categoría es obligatorio.']
	},
	descripcion: {
		type: String, 
		required: [true, 'La descripción de la categoría es obligatoria.']
	}
});

module.exports = mongoose.model('CategoriaDorama', CategoriaDoramaSchema);