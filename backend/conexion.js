const mongoose = require('mongoose');

// Reemplaza con tu cadena de conexión de MongoDB Atlas
const uri = 'mongodb+srv://47960727:Momox231@cluster0.dmp3e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado a MongoDB!');
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
    });
