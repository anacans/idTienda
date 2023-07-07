const { model, Schema } = require('mongoose')

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    department: String,
    available: Boolean,
    stock: Number
}, { timestamps: true, versionKey: false }) //timestamp te crea dos campos nuevos, fecha de creacion y fecha de actualizacion

module.exports = model('product', productSchema) // como primera valor le pasamos el nombre de la coleccion en SINGULAR y como segundo parametro el schema