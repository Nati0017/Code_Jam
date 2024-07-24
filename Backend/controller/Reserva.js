import express from (express); 

const Reserva = require('../models/ReservaSchema');

// Ejemplo de métodos del controlador
async function crearReserva(req, res) {
    try {
        // Lógica para crear una reserva
        const nuevaReserva = new Reserva(req.body);
        await nuevaReserva.save();
        res.status(201).json(nuevaReserva);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
}

module.exports = {
    crearReserva
    // Agregar otros métodos según sea necesario
};
