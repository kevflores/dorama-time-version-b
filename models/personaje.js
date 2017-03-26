var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonajeSchema = new Schema({
	nombre: {
		type: String, 
		maxlength: [50, 'El nombre del personaje no puede contener más de 50 caracteres.'], 
		required: [true, 'El nombre del personaje es obligatorio.'
	]},
	nombresAlternativos: [{
        nombre: {
            type: String, 
			maxlength: [50, 'El nombre alternativo no puede contener más de 50 caracteres.']
        }
	}],
	edad: {type: String /* Se especifica como String, para permitir la indicación de varias edades a lo largo de la historia. */}
	resumen: { 
		type: String, 
		required[true, 'El resumen sobre el personaje es obligatorio.']
	},
	imagenes: [{picURL: String}],
	dorama: {type: Schema.Types.ObjectId, ref: 'Dorama'},
	actor: {type: Schema.Types.ObjectId, ref: 'Actor'},
	categoriaPersonaje: {type: Schema.Types.ObjectId, ref: 'CategoriaPersonaje'},
});

module.exports = mongoose.model('Personaje', PersonajeSchema);
