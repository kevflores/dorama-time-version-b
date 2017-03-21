var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActorSchema = new Schema({
	nombre: {type: String, /* max: 30,*/ required: [true, 'El nombre del actor es obligatorio.']},
	nombreAlternativo: {type: Array /*, max: 30,*/ /*INVESTIGAR sobre Arrays en Documentación.*/},
	nombreReal: {type: String /*, max: 30,*/},
	nickname: {type: String /*, max: 30,*/},
	fechaNacimiento: {type: Date},
	fechaFallecimiento: {type: Date},
	estatura: {type: String},
	peso: {type: String},
	genero: { /*¿Colocar String o Array de Opciones? INVESTIGAR en Documentación.*/ },
	resumen: { type: String, required[true, 'El resumen sobre el actor es obligatorio.']},
	url: {type: Array /* Debe incluir: 'tipo de red' y 'dirección' */},
	imagen {type: Array /* ¿Cómo incluir array de imágenes? */},
	categoriaDorama: {type: Schema.Types.ObjectId, ref: 'CategoriaDorama'}
});

module.exports = mongoose.model('Actor', ActorSchema);

/*
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cart: {type: Object, required: true},
    address: {type: String, required: true},
    name: {type: String, required: true},
    paymentId: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('Order', schema);
/*