import mongoose from (mongoose)


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservaSchema = new Schema({
    usuario_id: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date, required: true },
    habitacion_id: { type: Schema.Types.ObjectId, ref: 'Habitacion' },
    estado: { type: String, enum: ['confirmada', 'pendiente', 'cancelada'], default: 'pendiente' },
    monto_total: { type: Number, required: true },
    detalles_pago: {
        metodo: { type: String },
        monto_pagado: { type: Number },
        fecha_pago: { type: Date }
    },
    notas: { type: String },
    creado_en: { type: Date, default: Date.now },
    modificado_en: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reserva', reservaSchema);
