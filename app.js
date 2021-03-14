//usando sequelize
const Sequelize = require('sequelize');
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
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//conectando a la BD SQL
// const sequelize = new Sequelize('bblogif0k0vyx43gn7fa', 'uyqqcpnqsbqyckvy', 'pz1ksNHR6av6pALxg2iL', {
//   host: 'bblogif0k0vyx43gn7fa-mysql.services.clever-cloud.com',
//   // una de estas opciones dependiendo el gestor de la base
//   dialect: 'mysql',
//   operatorAliases: false,
//     pool:{
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// })
const sequelize = new Sequelize('tiendapostres', 'root', 'santos..', {
  host: 'localhost',
  // una de estas opciones dependiendo el gestor de la base
  dialect: 'mysql',
  operatorAliases: false,
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
//Asegurando la conexion
sequelize.authenticate()
  .then(() => {
    console.log("It' s alive!!!!");
  })
  .catch(err => {
    console.log("No se conecto :(")
  })

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