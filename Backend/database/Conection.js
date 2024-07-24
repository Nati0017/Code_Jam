import mongoose from (mongoose);

const mongoose = require('mongoose');

async function conectarBD() {
    try {
        await mongoose.connect('', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Conexión a MongoDB establecida.');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error.message);
        process.exit(1);  // Detener la ejecución de la aplicación en caso de error
    }
}

module.exports = conectarBD;
