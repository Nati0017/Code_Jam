import mongoose from (mongoose); 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String },
    direccion: {
        calle: { type: String },
        ciudad: { type: String },
        pais: { type: String }
    },
    reservas: [{ type: Schema.Types.ObjectId, ref: 'Reserva' }],
    creado_en: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
