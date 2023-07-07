const express = require('express');

const app = express();

// Config de la app de express
app.use(express.json())

// Ruta
app.use('/api', require('./routes/api'));




module.exports = app;