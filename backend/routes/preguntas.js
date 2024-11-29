const express = require('express');
const PreguntaVoc = require('../models/PreguntaVoc');
const PreguntaPer = require('../models/PreguntaPer');
const PreguntaAP = require('../models/PreguntaAP');
const router = express.Router();

router.get('/vocacionales', async (req, res) => {
  try {
    const preguntas = await PreguntaVoc.find();
    res.json(preguntas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener preguntas vocacionales' });
  }
});

router.get('/aptitudes', async (req, res) => {
  try {
    const preguntas = await PreguntaAP.find();
    res.json(preguntas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener preguntas de aptitudes' });
  }
});

router.get('/personalidad', async (req, res) => {
  try {
    const preguntas = await PreguntaPer.find();
    res.json(preguntas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener preguntas de personalidad' });
  }
});

module.exports = router;