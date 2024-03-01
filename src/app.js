require('dotenv').config()
const express = require('express');
const path = require('path');

const indexRoutes= path.join(__dirname, 'routes', 'index.js');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');

const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/',indexRoutes);
app.use('/api',moviesRoutes);
app.use('/api',genresRoutes);

app.listen('3001', () => console.log('♥ EL SERVIDOR ESTA FUNCIONANDOOOOOOOO ♥'));

// Manejo de ERRORS
app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send('Algo salio mal WEI');
})

///BODY PARSER

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname)