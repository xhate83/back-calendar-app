
const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors')


// Crear servidor
const app = express();

// Base de datos

dbConnection();

app.use(cors())

// Directorio público
app.use(express.static('public'));

// Lectura y parse del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${process.env.PORT}`);
});