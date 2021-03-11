/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 

// importamos el modelo de usuarios
const Usuario = require('../models/Usuario')

function crearUsuario(req, res,next) {
  const usr = Usuario.build(req.body)

  usr.save().then(user => {
    console.log("cree un nuevo administrador");
    return res.status(201).json(user.toAuthJSON())
  }).catch(next);
}

function consultarUsuarios(req, res) {
  Usuario.findAll().then(user => {
    console.log("Entre consultar administrador");
    return res.json(user)
  }).catch(error => {
    return res.sendStatus(401)
  })
}

function modificarUsuario(req, res) {
  const usr = Usuario.create({
    id: req.params.id,
    ...req.body
  })
  usr.save().then(user => {
    console.log("Modifique usuario");
    return res.status(201).json(user.toAuthJSON())
  }).catch(next);
}

function eliminarUsuario(req, res) {
  const usr = Usuario.findByPk(req.usuario.id);
  if (usr === null) {
    return res.sendStatus(401)
  } else {
    usr.destroy().then(user => {
      console.log("Elimine usuario");
      return res.status(200)
    }).catch(err => {
      return res.sendStatus(500)
    })
  }
}

function login (req,res){
  const usr = Usuario.findByPk(req.usuario.id);
  if (usr === null) {
    return res.sendStatus(401)
  } else {
    return res.status(200).send(`Usuario con el id: ${req.usuario.id} inicio sesión`);
  }
}

// exportamos las funciones definidas
module.exports = {
  crearUsuario,
  consultarUsuarios,
  modificarUsuario,
  eliminarUsuario,
  login
} */

// Importamos modelo Usuario

const Usuario = require('../models/Usuario')

// Función para crear nuevo registro de Usuario

function crearUsuario(req, res,next) {
  // construye una instancia del modelo Usuario con los argumentos que recibe en la petición
  const usr = Usuario.build(req.body)
  // Guarda esta instancia, es hasta este momento que se modifica la base de datos.
  usr.save().then(user => {
    return res.status(201).json(user.toAuthJSON())
  }).catch(next);
}

// Función para obtener Usuarios

function obtenerUsuarios(req, res) {
  // Hace una consulta en la base de datos.
  User.findAll().then(users => {
    return res.json(users)
  }).catch(error => {
    return res.sendStatus(401)
  })
}

// Función para búsquedas más específicas



// Función para modificar Usuario

function modificarUsuario(req, res,next) {
  // Se crea un usuario con el id del que se quiere modificar y los cambios descritos en el body
  const usr = User.create({
    id : req.params.id,
    ...req.body
  })
  // Se guarda en la DB
  usr.save().then(user => {
    return res.status(201).json(user.toAuthJSON())
  }).catch(next);
}

// Función para eliminar Usuario

function eliminarUsuario(req, res) {
  // Usamos findByPK para buscar al usuario por su id
  const usr = User.findByPk(req.usuario.id);
  if (usr === null){
    // si no existe lanzamos un 400 
    return res.sendStatus(401)
  } else {
    // Si existe, lo eliminamos
    usr.destroy().then(usr => {
      return res.status(200)
    }).catch(err => {
      return res.sendStatus(500)
    })
  }
}
