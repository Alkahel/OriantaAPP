const mongoose = require('mongoose');

// Conectar a la base de datos
mongoose.connect('mongodb+srv://47960727:Momox231@cluster0.dmp3e.mongodb.net/TesyV?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Definir el esquema para la colección preguntasAP
const preguntaSchema = new mongoose.Schema({
    pregunta_id: String,
    texto: String,
    opciones: [
        {
            opcion_id: String,
            texto: String,
            puntuacion: Number,
        },
    ],
    tipo: String,
    peso: Number,
});

// Crear el modelo basado en el esquema
const Pregunta = mongoose.model('preguntasAP', preguntaSchema);

// Array de preguntas a insertar
const preguntas = [
    {
        pregunta_id: 'preg1b',
        texto: '¿Cómo te sientes al trabajar con números?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Me encanta resolver problemas matemáticos.', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'Me siento cómodo, pero no es mi parte favorita.', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'Prefiero evitarlo si puedo.', puntuacion: 1 }
        ],
        tipo: 'multiple_choice',
        peso: 4,
    },
    {
        pregunta_id: 'preg2b',
        texto: '¿Te consideras una persona organizada?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Sí, siempre planifico mis tareas.', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'A veces, depende del contexto.', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'No, prefiero ser espontáneo.', puntuacion: 1 }
        ],
        tipo: 'multiple_choice',
        peso: 4,
    },
    {
        pregunta_id: 'preg3b',
        texto: '¿Cómo manejas el trabajo bajo presión?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Me motiva a ser más productivo.', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'Puedo manejarlo, pero prefiero un ambiente tranquilo.', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'Me estresa mucho.', puntuacion: 1 }
        ],
        tipo: 'multiple_choice',
        peso: 3,
    },
    {
        pregunta_id: 'preg4b',
        texto: '¿Te gusta trabajar en equipo?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Sí, disfruto colaborar con otros.', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'Depende del grupo.', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'Prefiero trabajar solo.', puntuacion: 1 }
        ],
        tipo: 'multiple_choice',
        peso: 4,
    },
    {
        pregunta_id: 'preg5b',
        texto: '¿Tienes habilidades técnicas específicas (por ejemplo, programación)?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Sí, tengo experiencia significativa.', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'He aprendido algunas cosas básicas.', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'No tengo experiencia en eso.', puntuacion: 1 }
        ],
        tipo: 'multiple_choice',
        peso: 5,
    },
    {
        pregunta_id: 'preg6b',
        texto: 'Cuando enfrentas un problema, ¿cuál es tu enfoque principal?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Analizo todos los datos antes de decidir.', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'Confío en mi intuición.', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'Busco ayuda para resolverlo.', puntuacion: 1 }
        ],
        tipo: 'multiple_choice',
        peso: 4,
    },
    {
        pregunta_id: 'preg7b',
        texto: '¿Te consideras una persona creativa?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Sí, siempre tengo ideas nuevas.', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'A veces me siento creativo.', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'No me considero creativo.', puntuacion: 1 }
        ],
        tipo: 'multiple_choice',
        peso: 4,
    },
    {
        pregunta_id: 'preg8b',
        texto: '¿Cómo te sientes al aprender cosas nuevas?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Me emociona aprender nuevos conceptos.', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'Estoy abierto a ello, pero me puede costar adaptarme.', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'Prefiero quedarme con lo que ya sé.', puntuacion: 1 }
        ],
        tipo: 'multiple_choice',
        peso: 4,
    },
    {
        pregunta_id: 'preg9b',
        texto: '¿Qué tan importante es para ti ayudar a los demás en tu trabajo?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Muy importante; quiero hacer una diferencia positiva.', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'Moderadamente importante; depende del contexto.', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'No es una prioridad para mí.', puntuacion: 1 }
        ],
        tipo: 'multiple_choice',
        peso: 3,
    },
    {
        pregunta_id: 'preg10b',
        texto: '¿Cuáles son tus habilidades interpersonales?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Me comunico bien con los demás.', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'Puedo ser reservado pero me esfuerzo por interactuar.', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'Prefiero no involucrarme demasiado socialmente.', puntuacion: 1 }
        ],
        tipo: 'multiple_choice',
        peso: 3,
    },
    // Agregar las demás preguntas siguiendo el mismo formato...
];

// Insertar las preguntas en la colección
Pregunta.insertMany(preguntas)
    .then(() => {
        console.log("Preguntas insertadas exitosamente.");
        mongoose.connection.close(); // Cerrar la conexión después de la inserción
    })
    .catch(err => {
        console.error("Error al insertar preguntas:", err);
    });