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