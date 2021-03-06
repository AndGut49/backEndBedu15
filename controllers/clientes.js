
/*  Archivo controllers/clientes.js
 *  Simulando la respuesta de objetos Cliente
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de clientes
const Cliente = require('../models/Cliente')

function crearCliente(req, res) {
  // Instanciaremos un nuevo cliente utilizando la clase cliente
  var cliente = new Cliente(req.body)
  res.status(201).send(cliente)
}

function consultarCliente(req, res) {
  // Simulando cliente
  // idCliente, nombre, apellidoPaterno, apellidoMaterno, direccion, cp, correo, password
  var cliente1 = new Cliente(1, 'Alexander', 'Santos','Iguala de la independencia','40020','rast.santos@gmail.com','123456789')
  res.send([cliente1])
}

function modificarCliente(req, res) {
  // simulando un cleinte previamente existente que se modifica
  var cliente1 = new Cliente(req.params.id,'Alexander', 'Santos','Iztapalapa','09310','rast.santos@gmail.com','123456789')
  var modificaciones = req.body
  cliente1 = { ...cliente1, ...modificaciones }
  res.send(cliente1)
}

function eliminarCliente(req, res) {
  // se simula una eliminación de cliente, regresando un 200
  res.status(200).send(`Cliente con el id: ${req.params.id} eliminado`);
}


// exportamos las funciones definidas
module.exports = {
  crearCliente,
  consultarCliente,
  modificarCliente,
  eliminarCliente,
}
