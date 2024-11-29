const mongoose = require('mongoose');

// Conectar a la base de datos
mongoose.connect('mongodb+srv://47960727:Momox231@cluster0.dmp3e.mongodb.net/TesyV?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Definir el esquema para la colección preguntasVoc
const preguntaSchema = new mongoose.Schema({
    pregunta_id: String,
    texto: String,
    opciones: [
        {
            opcion_id: String,
            texto: String,
            area_vocacional: String,
            puntuacion: Number,
        },
    ],
    tipo: String,
    peso: Number,
});

// Crear el modelo basado en el esquema
const Pregunta = mongoose.model('preguntasVoc', preguntaSchema);


// Array de preguntas a insertar
const preguntas = [
    
 
    {
        pregunta_id: 'preg1a',
        texto:'¿Qué actividad disfrutas más en tus ratos libres?',
        opciones:[
            {opcion_id:'opcionA', texto: ' Hacer manualidades o diseñar',area_vocacional:'Arte y creatividad',puntuacion: 1},
            {opcion_id:'opcionB', texto: ' Leer sobre psicología o sociología',area_vocacional:'Ciencias Sociales y Jurídicas',puntuacion: 1},
            {opcion_id:'opcionC', texto: ' Planificar eventos o gestionar proyectos',area_vocacional:'Economía, Administración y Financiera',puntuacion:1},
            {opcion_id:'opcionD', texto: ' Construir cosas o experimentar con gadgets tecnológicos',area_vocacional:'Ingeniería y Arquitectura',puntuacion:1},
            {opcion_id:'opcionE', texto: ' Hace experimentos en la cocina o estudiar sobre animales',area_vocacional:'Ciencias Biológicas, Ecológicas y de Salud',puntuacion:1 }
       
        ],
        tipo: 'multiple_choice',
        peso: 5,
    },

    {
        pregunta_id: 'preg2a',
        texto: '¿Qué tipo de series o películas prefieres ver?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Documentales sobre arte o diseño', area_vocacional: 'Arte y creatividad', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'Series sobre casos criminales o dramas sociales', area_vocacional: 'Ciencias Sociales y Jurídicas', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'Documentales sobre negocios o economía', area_vocacional: 'Economía, Administración y Financiera', puntuacion: 1 },
            { opcion_id: 'opcionD', texto: 'Películas de ciencia ficción o sobre avances tecnológicos', area_vocacional: 'Ingeniería y Arquitectura', puntuacion: 1 },
            { opcion_id: 'opcionE', texto: 'Documentales sobre naturaleza o medicina', area_vocacional: 'Ciencias Biológicas, Ecológicas y de Salud', puntuacion: 1 }
        ],
        tipo: 'multiple_choice',
        peso: 4,
    },


    {
        pregunta_id: 'preg3a',
        texto: '¿Cuál de estos pasatiempos te resulta más atractivo?',
        opciones: [
            { opcion_id: 'opcionA', texto: 'Pintar, dibujar o diseñar moda', area_vocacional: 'Arte y creatividad', puntuacion: 1 },
            { opcion_id: 'opcionB', texto: 'Participar en debates o actividades comunitarias', area_vocacional: 'Ciencias Sociales y Jurídicas', puntuacion: 1 },
            { opcion_id: 'opcionC', texto: 'Crear un presupuesto familiar o gestionar inversiones', area_vocacional: 'Economía, Administración y Financiera', puntuacion: 1 },
            { opcion_id: 'opcionD', texto: 'Armar o desmontar equipos electrónicos', area_vocacional: 'Ingeniería y Arquitectura', puntuacion: 1 },
            { opcion_id: 'opcionE', texto: 'Cuidar plantas o entrenar mascota', area_vocacional: 'Ciencias Biológicas, Ecológicas y de Salud', puntuacion: 1 }
        ],
        tipo: 'multiple_choice',
        peso: 4,
    },
{
    pregunta_id: 'preg4a',
    texto: '¿Qué tipo de libros disfrutas leer?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'Libros sobre técnicas artísticas o diseño', area_vocacional: 'Arte y creatividad', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'Libros sobre comportamiento humano o casos legales', area_vocacional: 'Ciencias Sociales y Jurídicas', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'Libros sobre economía o gestión empresarial', area_vocacional: 'Economía, Administración y Financiera', puntuacion: 1 },
        { opcion_id: 'opcionD', texto: 'Libros sobre ingeniería, arquitectura o tecnología', area_vocacional: 'Ingeniería y Arquitectura', puntuacion: 1 },
        { opcion_id: 'opcionE', texto: 'Libros sobre biología, medicina o zoología', area_vocacional: 'Ciencias Biológicas, Ecológicas y de Salud', puntuacion: 1 }
    ],
    tipo: 'multiple_choice',
    peso: 4,
},


{
    pregunta_id: 'preg5a',
    texto: '¿Cuál es tu tipo de evento favorito para asistir?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'Exposiciones de arte o ferias de diseño', area_vocacional: 'Arte y creatividad', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'Charlas sobre temas sociales o conferencias educativas', area_vocacional: 'Ciencias Sociales y Jurídicas', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'Seminarios sobre negocios o talleres de gestión', area_vocacional: 'Economía, Administración y Financiera', puntuacion: 1 },
        { opcion_id: 'opcionD', texto: 'Eventos de tecnología o construcción', area_vocacional: 'Ingeniería y Arquitectura', puntuacion: 1 },
        { opcion_id: 'opcionE', texto: 'Ferias de ciencia  eventos relacionados con la salud', area_vocacional: 'Ciencias Biológicas, Ecológicas y de Salud', puntuacion: 1 }
    ],
    tipo: 'multiple_choice',
    peso: 3,
},


{
    pregunta_id: 'preg6a',
    texto: '¿Qué tipo de proyectos te gustaría hacer en tu tiempo libre?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'Diseñar tu propio espacio o hacer arte', area_vocacional: 'Arte y creatividad', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'Voluntariado en la comunidad o organizar eventos educativos', area_vocacional: 'Ciencias Sociales y Jurídicas', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'Crear un plan de ahorro o gestionar un pequeño negocio', area_vocacional: 'Economía, Administración y Financiera', puntuacion: 1 },
        { opcion_id: 'opcionD', texto: 'Construir un modelo o desarrollar un software', area_vocacional: 'Ingeniería y Arquitectura', puntuacion: 1 },
        { opcion_id: 'opcionE', texto: 'Investigar sobre el cuidado de plantas o hacer recetas saludable', area_vocacional: 'Ciencias Biológicas, Ecológicas y de Salud', puntuacion: 1 }
    ],
    tipo: 'multiple_choice',
    peso: 4,
},


{
    pregunta_id: 'preg7a',
    texto: '¿Qué tipo de actividades disfrutas en reuniones sociales?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'Participar en talleres creativos o actividades artísticas', area_vocacional: 'Arte y creatividad', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'Discutir temas sociales o colaborar en proyectos comunitarios', area_vocacional: 'Ciencias Sociales y Jurídicas', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'Hablar sobre estrategias empresariales o finanzas', area_vocacional: 'Economía, Administración y Financiera', puntuacion: 1 },
        { opcion_id: 'opcionD', texto: 'Conversar sobre nuevas tecnologías o proyectos de ingeniería', area_vocacional: 'Ingeniería y Arquitectura', puntuacion: 1 },
        { opcion_id: 'opcionE', texto: 'Hablar sobre descubrimientos científicos o cuidados de salud', area_vocacional: 'Ciencias Biológicas, Ecológicas y de Salud', puntuacion: 1 }
    ],
    tipo: 'multiple_choice',
    peso: 4,
},

{
    pregunta_id: 'preg8a',
    texto: '¿Cómo prefieres pasar un día libre?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'Explorando museos o creando algo nuevo', area_vocacional: 'Arte y creatividad', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'Participando en actividades que promuevan el bienestar social', area_vocacional: 'Ciencias Sociales y Jurídicas', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'Organizando tus finanzas o planificando futuros proyectos', area_vocacional: 'Economía, Administración y Financiera', puntuacion: 1 },
        { opcion_id: 'opcionD', texto: 'Trabajando en un proyecto de tecnología o construcción', area_vocacional: 'Ingeniería y Arquitectura', puntuacion: 1 },
        { opcion_id: 'opcionE', texto: 'Realizando actividades al aire libre o aprendiendo sobre la naturaleza', area_vocacional: 'Ciencias Biológicas, Ecológicas y de Salud', puntuacion: 1 }
    ],
    tipo: 'multiple_choice',
    peso: 3,
},

{
    pregunta_id: 'preg9a',
    texto: '¿Qué aspecto de un trabajo te parece más atractivo?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'La posibilidad de expresarte creativamente y hacer cosas nuevas', area_vocacional: 'Arte y creatividad', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'La oportunidad de hacer una diferencia en la vida de las personas', area_vocacional: 'Ciencias Sociales y Jurídicas', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'La capacidad de administrar y mejorar recursos y proyectos', area_vocacional: 'Economía, Administración y Financiera', puntuacion: 1 },
        { opcion_id: 'opcionD', texto: 'La posibilidad de resolver problemas complejos y diseñar soluciones', area_vocacional: 'Ingeniería y Arquitectura', puntuacion: 1 },
        { opcion_id: 'opcionE', texto: 'La oportunidad de contribuir al conocimiento científico y mejorar la salud', area_vocacional: 'Ciencias Biológicas, Ecológicas y de Salud', puntuacion: 1 }
    ],
    tipo: 'multiple_choice',
    peso: 5,
},
{
    pregunta_id: 'preg10a',
    texto: '¿Qué temas te gustaría explorar más a fondo?',
    opciones: [
        { opcion_id: 'opcionA', texto: 'Arte y diseño gráfico', area_vocacional: 'Arte y creatividad', puntuacion: 1 },
        { opcion_id: 'opcionB', texto: 'Psicología y comportamiento humano', area_vocacional: 'Ciencias Sociales y Jurídicas', puntuacion: 1 },
        { opcion_id: 'opcionC', texto: 'Finanzas y economía', area_vocacional: 'Economía, Administración y Financiera', puntuacion: 1 },
        { opcion_id: 'opcionD', texto: 'Tecnología e innovación', area_vocacional: 'Ingeniería y Arquitectura', puntuacion: 1 },
        { opcion_id: 'opcionE', texto: 'Biología y medio ambiente', area_vocacional: 'Ciencias Biológicas, Ecológicas y de Salud', puntuacion: 1 }
    ],
    tipo: 'multiple_choice',
    peso: 4,
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
