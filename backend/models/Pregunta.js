const mongoose = require('mongoose');

const opcionSchema = new mongoose.Schema({
  opcion_id: String,
  texto: String,
  area_vocacional: String,
  puntuacion: Number,
});

const preguntaSchema = new mongoose.Schema({
  pregunta_id: String,
  texto: String,
  opciones: [opcionSchema],
  tipo: String,
  peso: Number,
});

module.exports = mongoose.model('Pregunta', preguntaSchema);