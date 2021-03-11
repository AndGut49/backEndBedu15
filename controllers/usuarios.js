/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

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
}
