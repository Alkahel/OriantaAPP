const mongoose = require('mongoose');

// Conectar a la base de datos
mongoose.connect('mongodb+srv://47960727:Momox231@cluster0.dmp3e.mongodb.net/TesyV?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Definir el esquema para la colección preguntasPer
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
const Pregunta = mongoose.model('preguntasPer', preguntaSchema);


// Array de preguntas a insertar
const preguntas = [
    
 
    {
        pregunta_id: 'preg1c',
        texto:'¿Cómo describirías tu estilo de trabajo ideal?',
        opciones:[
            {opcion_id:'opcionA', texto: 'Creativo e innovador.',puntuacion: 1},
            {opcion_id:'opcionB', texto: ' Colaborativo y comunicativo.',puntuacion: 1},
            {opcion_id:'opcionC', texto: ' Estructurado y organizado.',puntuacion:1}
        ],
        tipo: 'multiple_choice',
        peso: 5,
    },

    {
        pregunta_id: 'preg2c',
        texto: 'Cuando tomas decisiones, ¿te guías más por la lógica que por las emociones?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Siempre priorizo la lógica.', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'Depende del contexto; a veces uso emociones.', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'Generalmente me dejo llevar por mis emociones.', puntuacion: 1 }
         ],
        tipo: 'multiple_choice',
        peso: 4,
    },


    {
        pregunta_id: 'preg3c',
        texto: 'En situaciones sociales, ¿te consideras extrovertido/a?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Sí, disfruto estar rodeado/a de personas.', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'Soy intermedio; a veces disfruto estar solo/a.', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'No, prefiero la soledad.', puntuacion: 1 }
          ],
        tipo: 'multiple_choice',
        peso: 4,
    },
{
    pregunta_id: 'preg4c',
    texto: 'Cuando enfrentas un desafío, ¿cómo reaccionas generalmente?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'Busco soluciones rápidamente.', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'Me tomo un tiempo para reflexionar antes de actuar.', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'Me siento abrumado/a y necesito apoyo.', puntuacion: 1 }
    ],
    tipo: 'multiple_choice',
    peso: 3,
},


{
    pregunta_id: 'preg5c',
    texto: '¿Te gusta asumir roles de liderazgo en grupos?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'Sí, me encanta liderar iniciativas.', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'Estoy dispuesto/a a liderar si es necesario.', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'Prefiero seguir a otros.', puntuacion: 1 }
    ],
    tipo: 'multiple_choice',
    peso: 4,
},


{
    pregunta_id: 'preg6c',
    texto: 'En cuanto a la rutina diaria, ¿prefieres tener un horario fijo?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'Sí, me gusta tener todo planeado.', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'Puedo adaptarme a cambios ocasionales.', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'Prefiero ser flexible y espontáneo/a', puntuacion: 1 }
     ],
    tipo: 'multiple_choice',
    peso: 3,
},


{
    pregunta_id: 'preg7c',
    texto: '¿Cómo manejas el estrés en situaciones difíciles?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'Busco maneras efectivas para aliviarlo (ejercicio).', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'Intento hablar con alguien para desahogarme.', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'Me cuesta manejarlo y a veces me siento abrumado/a.', puntuacion: 1 }
    ],
    tipo: 'multiple_choice',
    peso: 4,
},

{
    pregunta_id: 'preg8c',
    texto: '¿Qué tan importante es para ti ayudar a los demás en tu trabajo?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'Muy importante; quiero hacer una diferencia positiva.', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'Moderadamente importante; depende del contexto.', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'No es una prioridad para mí.', puntuacion: 1 }
    ],
    tipo: 'multiple_choice',
    peso: 5,
},

{
    pregunta_id: 'preg9c',
    texto: 'Cuando trabajas en equipo, ¿cómo contribuyes generalmente?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'Proporciono ideas creativas e innovadoras.', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'Organizo tareas y aseguro que todos estén alineados.', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'Sigo instrucciones y apoyo a otros según sea necesario.', puntuacion: 1 }
    ],
    tipo: 'multiple_choice',
    peso: 4,
},
{
    pregunta_id: 'preg10c',
    texto: 'Si tuvieras que describirte con tres palabras, ¿cuáles serían?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'Creativo.', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'Sociable.', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'Introvertivo.', puntuacion: 1 }
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
