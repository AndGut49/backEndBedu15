
const Tamanio = require('../models/Tamanio')

function crearTamanio (req,res) {
    // Función para crear un nuevo tamaño
    var tamanio = new Tamanio(req.body)
    res.status(201).send(tamanio)
}
function actualizarTamanio (req,res) {
    // Función para actualizar la información de el tamaño
    var tamanio1 = new Tamanio(req.params.id, 'Chico')
    var modificaciones = req.body
    tamanio1 = { ...tamanio1, ...modificaciones }
    res.send(tamanio1)
}
function eliminarTamanio (req,res) {
    //Función para eliminar un tamaño
    res.status(200).send(`Tamaño con el id ${req.params.id} eliminado`);
} 

function consultarTamanio (req,res) {
    //Función para consultar los tamaños disponibles
    var tamanio1 = new Tamanio(1, 'Chico')
    var tamanio2 = new Tamanio(2, 'Mediano')
    res.send([tamanio1,tamanio2])
}

// exportamos las funciones definidas
module.exports = {
    crearTamanio,
    actualizarTamanio,
    eliminarTamanio,
    consultarTamanio
}
