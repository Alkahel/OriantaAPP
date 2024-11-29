const mongoose = require('mongoose');

const opcionSchema = new mongoose.Schema({
  opcion_id: String,
  texto: String,
  puntuacion: Number,
});

const preguntaAPSchema = new mongoose.Schema({
  pregunta_id: String,
  texto: String,
  opciones: [opcionSchema],
  tipo: String,
  peso: Number,
});

module.exports = mongoose.model('preguntasAP', preguntaAPSchema);