import express from (express); 

const express = require('express');
const router = express.Router();
const reservaController = require('../controller/Reserva');

// Rutas para las reservas
router.post('/Reserva', Reserva.crearReserva);
// Agregar más rutas según sea necesario

module.exports = router;
