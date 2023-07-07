const express = require('express');

const app = express();

// Config de la app de express
app.use(express.json())

// Rutas
app.get('/', (req, res) => {
    res.send('mandangas varias')
})

app.use('/api', require('./routes/api'));




module.exports = app;