const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    usuario: {
        type: String,
        required: true,
    },
    clave: {
        type: String,
        required: true,
    },
    create_at: {
        type: Date,
        default: Date.now

    },
    estado: {
        type: Boolean,
        required: false,
        default: true
    }

});


module.exports = mongoose.model('Usuario', usuarioSchema);





