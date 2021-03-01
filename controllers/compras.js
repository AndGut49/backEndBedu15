/*  Archivo controllers/compras.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de Compra 
const Compra = require('../models/Compra')

function crearCompra(req, res) {
  // Instanciaremos una nueva compra utilizando la clase Compra
  var compra = new Compra(req.body)
  res.status(201).send(compra)
}

function obtenerCompras(req, res) {
  // Simulando dos compras y respondiendolos
  var compra1 = new Compra(1, 27, 'Pastel', 'Queso zarzamora', 'individual', 'queso', 2, 'tarjetaCredito')
  var compra2 = new Compra(2, 45, 'Mousse', 'Mango', 'chico', 'frutal', 1, 'efectivo') 
  res.send([compra1, compra2])
}

function modificarCompra(req, res) {
  // simulando una compra previamente existente que el cliente modifica
  var compra1 = new Compra(req.params.id, 1, 27, 'Pastel', 'Queso zarzamora', 'individual', 'queso', 2, 'tarjetaCredito')
  var modificaciones = req.body
  compra1 = { ...compra1, ...modificaciones }
  res.send(compra1)
}

function eliminarCompra(req, res) {
  // se simula una eliminación de compra, regresando un 200
  res.status(200).send(`Compra ${req.params.id} eliminada`);
}

// exportamos las funciones definidas
module.exports = {
  crearCompra,
  obtenerCompras,
  modificarCompra,
  eliminarCompra
}