
require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');

const { dbConection } = require('./database/config');

// Crear servidor express
const app = express();

// Configurar cors
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Base de datos
dbConection();

// Directorio publico
app.use(express.static('public'));

// Rutas
app.use( '/api/usuarios', require('./routes/user-route') );
app.use( '/api/login', require('./routes/auth') );

// lo ultimo 
app.get('*', (req, res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});

app.listen(process.env.PORT, () => {
    console.log('Servidor ' + process.env.PORT)
});

