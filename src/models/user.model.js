const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'regular' //valor por defecto
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }]

}, { timestamps: true, versionKey: false }) //timestamp te crea dos campos nuevos, fecha de creacion y fecha de actualizacion

module.exports = model('user', userSchema) // como primera valor le pasamos el nombre de la coleccion en SINGULAR y como segundo parametro el schema