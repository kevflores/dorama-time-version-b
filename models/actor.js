var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActorSchema = new Schema({
	nombre: {
		type: String, 
		maxlength: [50, 'El nombre del actor no puede contener más de 50 caracteres.'], 
		required: [true, 'El nombre del actor es obligatorio.'
	]},
	nombresAlternativos: [{
        nombre: {
            type: String, 
			maxlength: [50, 'El nombre alternativo no puede contener más de 50 caracteres.']
        }
	}],
	nombreReal: {
		type: String, 
		maxlength: [50, 'El nombre real no puede contener más de 50 caracteres.']
	},
	apodo: {
		type: String, 
		maxlength: [50, 'El apodo no puede contener más de 50 caracteres.']
	},
	lugarNacimiento: {
		type: String, 
		maxlength: [50, 'La descripción del lugar de nacimiento no puede contener más de 50 caracteres.']
	},
	fechaNacimiento: {type: Date},
	fechaFallecimiento: {type: Date},
	estatura: {
		type: String, 
		maxlength: [15, 'La descripción de la estatura no puede contener más de 15 caracteres.']
	},
	peso: {
		type: String, 
		maxlength: [15, 'La descripción del peso no puede contener más de 15 caracteres.']
	},
	genero: {
		type: String, 
		uppercase: true,
		default: 'M'
	},
	resumen: { 
		type: String, 
		required: [true, 'El resumen sobre el actor es obligatorio.']
	},
	url: [{
		tipoRed: {
            type: String,
            maxlength: [20, 'El tipo de red no puede contener más de 20 caracteres.']
        },
        direccion: String
	}],
	imagenes: [{picURL: String}],
	categoriaDorama: {type: Schema.Types.ObjectId, ref: 'CategoriaDorama'}
}, { collection: 'actor' });

module.exports = mongoose.model('Actor', ActorSchema);