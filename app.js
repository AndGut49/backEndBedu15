//usando sequelize
const Sequelize = require('sequelize')

var isProduction = process.env.NODE_ENV === 'production';

//conectando a la BD SQL
const sequelize = new Sequelize('tiendaPostres', 'root', '4939165', {
  host: 'localhost',
  // una de estas opciones dependiendo el gestor de la base
  dialect: 'mysql',
})
//Asegurando la conexion
sequelize.authenticate()
  .then(() => {
    console.log("It' s alive!!!!");
  })
  .catch(err => {
    console.log("No se conecto :(")
  })

// Importamos las bibliotecas necesarias
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la app
var app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});