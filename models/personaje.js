var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonajeSchema = new Schema({
	nombre: {type: String, /* max: 30,*/ required: [true, 'El nombre del personaje es obligatorio.']},
	nombreAlternativo: {type: Array /*, max: 30,*/ /*INVESTIGAR sobre Arrays en Documentación.*/},
	edad: {type: String /* Se especifica como String, para permitir la indicación de varias edades a lo largo de la historia. */}
	resumen: { type: String, required[true, 'El resumen sobre el personaje es obligatorio.']},
	imagen {type: Array /* ¿Cómo incluir array de imágenes? */},
	dorama: {type: Schema.Types.ObjectId, ref: 'Dorama'},
	actor: {type: Schema.Types.ObjectId, ref: 'Actor'},
	categoriaPersonaje: {type: Schema.Types.ObjectId, ref: 'CategoriaPersonaje'},
});

module.exports = mongoose.model('Personaje', PersonajeSchema);
