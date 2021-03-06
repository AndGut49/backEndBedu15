/*  Archivo controllers/postres.js
 *  Simulando la respuesta de objetos Postre
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de Postre
const Postre = require('../models/Postre')

function crearPostre(req, res) {
    // Instanciaremos un nuevo postre utilizando la clase Postre
    var postre = new Postre(req.body)
    res.status(201).send(postre)
}

function consultarPostres(req, res) {
    // Simulando dos postres y respondiendolos
    //idPostre,idSaborPostre, idCategoria, idTamanio, nombre, precio, stock
    var postre1 = new Postre(1, 1, 2, 2, 'Tarta frutas', '125', 5)
    var postre2 = new Postre(2, 2, 3, 3, 'Pastel zanahoria', '189', 3)
    res.send([postre1, postre2])
}

function modificarPostre(req, res) {
    // simulando un postre previamente existente que se modifica
    var postre1 = new Postre(req.params.id, 1, 2, 2, 'Tarta frutas', '125', 20)
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
    consultarPostres,
    modificarPostre,
    eliminarPostre
}