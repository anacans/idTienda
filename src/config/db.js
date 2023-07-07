const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL); // para subir esta app la url no puede estar aqui. lo metemos en el archivo .env
