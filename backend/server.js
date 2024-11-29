const express = require('express');
const mongoose = require('mongoose');
const preguntasRouter = require('./routes/preguntas');
const respuestasRouter = require('./routes/respuestas');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://47960727:Momox231@cluster0.dmp3e.mongodb.net/TesyV?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado a MongoDB Atlas');
}).catch((error) => {
  console.error('Error al conectar a MongoDB Atlas:', error);
});

app.use(express.json());
app.use('/api/preguntas', preguntasRouter);
app.use('/api/respuestas', respuestasRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});