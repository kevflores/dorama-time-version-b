var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoramaSchema = new Schema({
	titulo: {
		type: String, 
		required: [true, 'El título del dorama es obligatorio.']
	},
	numeroEpisodios: {type: Number},
	fechaInicio: {type: Date},
	fechaFinalización: {type: Date},
	diasEmision: {type: String},
	horario: {type: String},
	estacionTv: {type: String},
	resumen: { 
		type: String, 
		required[true, 'El resumen sobre el dorama es obligatorio.']
	},
	genero: [{nombre: String}],
	director: [{nombre: String}],
	productor: [{nombre: String}],
	escritor: [{nombre: String}],
	categoriaDorama: {type: Schema.Types.ObjectId, ref: 'CategoriaDorama'}
}, { collection: 'dorama' });

module.exports = mongoose.model('Dorama', DoramaSchema);