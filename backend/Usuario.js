const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Para generar identificadores únicos

const usuarioSchema = new mongoose.Schema({
  usuario_id: { type: String, default: uuidv4 },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true, minlength: 6 },
  fecha_registro: { type: Date, default: Date.now },
  edad: { type: Number, required: true },
  fecha_ultimo_acceso: { type: Date, default: Date.now }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
