const express = require('express');

const router = express.Router();

// ===============================
// PRODUCTOS
// ===============================

const productos = [

  {
    nombre: " CONJUNTO HUGO BOSS ",

    precio: 250000,

    imagen: '/img/conjunto.jpg',

    descripcion: " Encontraras con una tela de exelente calidad y mejoraras tu apriencia notablemente ",
    
  },

  {
    nombre: "CONJUNTO NIKE",

    precio: 250000,

    imagen : '/img/conjunto nike.jpeg',

    descripcion:  " Encontraras con una tela de exelente calidad y mejoraras tu apriencia notablemente ",
  },

  {
    nombre: " CONJUNTO ADIDAS",

    precio: 250000,

    imagen: '/img/conjunto adidas.jpeg

    descripcion:  " Encontraras con una tela de exelente calidad y mejoraras tu apriencia notablemente ",
  },
  {
    nombre: 

    precio: 250000,

    imagen: '/img/Kit.jpeg',

    descripcion:
    'Set de productos naturales para el cuidado del cabello, con ingredientes seleccionados para una experiencia de baño relajante y revitalizante.'
  },

  {
    nombre: 'Spray Protector Térmico',

    precio: '$45.000',

    imagen: '/img/spray.jpeg',

    descripcion:
    'Protege el cabello del calor de planchas y secadores, evitando el quiebre y manteniendo el brillo natural.'
  },

  {
    nombre: 'Vitaminas Capilares',

    precio: '$95.000',

    imagen: '/img/vitaminas.jpeg',

    descripcion:
    'Fórmula enriquecida para fortalecer el cabello desde el interior, aportando brillo, crecimiento y vitalidad.'
  },

  {
    nombre: 'Tónico Anticaída',

    precio: '$80.000',

    imagen: '/img/tonico.jpeg',

    descripcion:
    'Fortalece la raíz capilar y ayuda a disminuir la caída del cabello estimulando el crecimiento saludable.'
  },

  {
    nombre: 'Serum Brillo Extremo',

    precio: '$70.000',

    imagen: '/img/serum.jpeg',

    descripcion:
    'Aporta un acabado luminoso y sedoso mientras controla el frizz y protege las puntas.'
  },

  {
    nombre: 'Peluca Lace Front',

    precio: '$450.000',

    imagen: '/img/pelucalace.jpeg',

    descripcion:
    'Peluca premium con acabado natural y línea frontal invisible para un look elegante y realista.'
  },

  {
    nombre: 'Peluca Natural',

    precio: '$520.000',

    imagen: '/img/Natural.jpeg',

    descripcion:
    'Cabello suave y natural con movimiento impecable para lucir hermosa en cualquier ocasión.'
  },

  {
    nombre: 'Peluca Sintética',

    precio: '$350.000',

    imagen: '/img/sintetica.jpeg',

    descripcion:
    'Diseño moderno y práctico con excelente textura y estilo para transformar tu look fácilmente.'
  },

  {
    nombre: 'Extensiones Premium',

    precio: '$400.000',

    imagen: '/img/premium.jpeg',

    descripcion:
    'Extensiones de alta calidad con acabado sedoso y natural que aportan volumen, largo y elegancia.'
  },

  {
    nombre: 'Paleta de Sombras',

    precio: '$80.000',

    imagen: '/img/paleta.jpeg',

    descripcion:
    'Colores intensos y elegantes para crear maquillajes glamorosos y duraderos.'
  },

  {
    nombre: 'Labiales de Larga Duración',

    precio: '$45.000',

    imagen: '/img/labiales.jpeg',

    descripcion:
    'Color vibrante y acabado impecable que permanece perfecto durante horas.'
  },

  {
    nombre: 'Delineador Líquido',

    precio: '$35.000',

    imagen: '/img/delineador.jpeg',

    descripcion:
    'Precisión y duración para una mirada impactante y sofisticada.'
  },
  {
    nombre: 'Vaseline',
    precio: '$45.000',
    imagen: '/img/Vaseline.jpeg',
    descripcion: 'Protección y hidratación para la piel seca.'
  }

];