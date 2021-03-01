/*  Archivo controllers/postres.js
 *  Simulando la respuesta de objetos Postre
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de Postre
const Postre = require('../models/Postre')

function crearPostre(req, res) {
    // Instanciaremos un nuevo usuario utilizando la clase Postre
    var postre = new Postre(req.body)
    res.status(201).send(postre)
}

function obtenerPostres(req, res) {
    // Simulando dos postres y respondiendolos
    var postre1 = new Postre(1, 'Tarta frutas', '125', '5','4')
    var postre2 = new Postre(2, 'Pastel zanahoria', '189', '3','3')
    res.send([postre1, postre2])
}

function modificarPostre(req, res) {
    // simulando un postre previamente existente que se modifica
    var postre1 = new Postre(req.params.id, 'Tarta frutas', '125','3','4')
    var modificaciones = req.body
    postre1 = { ...postre1, ...modificaciones }
    res.send(postre1)
}

function eliminarPostre(req, res) {
    // se simula una eliminación de postre, regresando un 200
    res.status(200).send(`Postre ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
    crearPostre,
    obtenerPostres,
    modificarPostre,
    eliminarPostre
}