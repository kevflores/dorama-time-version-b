var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoramaSchema = new Schema({
	titulo: {type: String, required: [true, 'El título del dorama es obligatorio.']},
	numeroEpisodios: {type: Integer /* ¿Buscar tipos de datos en documentación de Mongoose? */},
	fechaInicio: {type: Date},
	fechaFinalización: {type: Date},
	diasEmision: {type: String},
	horario: {type: String},
	estacionTv: {type: String},
	resumen: { type: String, required[true, 'El resumen sobre el dorama es obligatorio.']},
	genero: { /*¿Colocar String o Array de Géneros de Doramas? INVESTIGAR en Documentación.*/ },
	director: { /*¿Colocar String o Array? INVESTIGAR en Documentación.*/ },
	productor: { /*¿Colocar String o Array? INVESTIGAR en Documentación.*/ },
	escritor: { /*¿Colocar String o Array? INVESTIGAR en Documentación.*/ },
	categoriaDorama: {type: Schema.Types.ObjectId, ref: 'CategoriaDorama'}
});

module.exports = mongoose.model('Dorama', DoramaSchema);