/*  Archivo controllers/sabor.js
 *  Simulando la respuesta de objetos Sabor
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de Sabor
const Sabor = require('../models/Sabor')

function crearSabor(req, res) {
    // Instanciaremos un nuevo sabor utilizando la clase Postre
    var sabor = new Sabor(req.body)
    res.status(201).send(sabor)
}

function consultarSabor(req, res) {
    // Simulando dos sabores y respondiendolos
    //idSabor,nombreSabor
    var sabor1 = new Sabor(1, 'Queso con Zarzamora')
    var sabor2 = newSabor(2, 'Zanahoria')
    res.send([sabor1, sabor2])
}

function modificarSabor(req, res) {
    // simulando un sabor previamente existente que se modifica
    var sabor1 = new Sabor(req.params.id, 1, 'Queso con Fresa')
    var modificaciones = req.body
    sabor1 = { ...sabor1, ...modificaciones }
    res.send(sabor1)
}

function eliminarSabor(req, res) {
    // se simula una eliminación de sabor, regresando un 200
    res.status(200).send(`Sabor ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
    crearSabor,
    consultarSabor,
    modificarSabor,
    eliminarSabor
}