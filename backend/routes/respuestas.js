const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const respuestas = req.body;
  // Aquí puedes procesar las respuestas y calcular las puntuaciones
  res.json({ mensaje: 'Respuestas recibidas', respuestas });
});

module.exports = router;