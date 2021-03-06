/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de usuarios
const Usuario = require('../models/Usuario')

function crearUsuario(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var usuario = new Usuario(req.body)
  res.status(201).send(usuario)
}

function consultarUsuarios(req, res) {
  // Simulando dos usuarios y respondiendolos
  var usuario1 = new Usuario(1, 'Rafael Alejandro', 'Santos','Trujillo','url foto',26,'M','Iguala de la independencia','rast.santos@gmail.com','pass123', '7331487116')
  res.send([usuario1])
}

function modificarUsuario(req, res) {
  // simulando un usuario previamente existente que el cliente modifica
  var usuario1 = new Usuario(req.params.id, 'Rafael Alejandro', 'Santos','Trujillo','url foto',26,'M','Iztapalapa CDMX','rast.santos@gmail.com','pass123', '7331487116')
  var modificaciones = req.body
  usuario1 = { ...usuario1, ...modificaciones }
  res.send(usuario1)
}

function eliminarUsuario(req, res) {
  // se simula una eliminación de usuario, regresando un 200
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

function login (req,res){
    res.status(200).send(`Usuario con el id: ${req.params.id} inicio sesión`);
}

// exportamos las funciones definidas
module.exports = {
  crearUsuario,
  consultarUsuarios,
  modificarUsuario,
  eliminarUsuario,
  login
}
