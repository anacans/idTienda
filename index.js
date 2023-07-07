const http = require('http');
const app = require('./src/app');

// Config de .env
require('dotenv').config();

// Confif BD
require('./src/config/db')

// Creamos el servidor
const server = http.createServer(app);

// Poner a escuchar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening', () => console.log(`Servidor escuchando en ${PORT}`))

