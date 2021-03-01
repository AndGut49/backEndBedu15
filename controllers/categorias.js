const Categoria = require('../models/Categoria')

function crearCategoria(req, res) {
    // Instanciaremos una nueva categoria utilizando la clase Categoria
    var categoria = new Categoria(req.body)
    res.status(201).send(categoria)
}

function obtenerCategorias(req, res) {
    // Simulando dos categorias y respondiendolas
    var categoria1 = new Categoria(1, 'Postres Frios', 'Se incluyen merengues, puddings, carlotas, entre otros')
    var categoria2 = new Categoria(2, 'Postres Calientes', ' ')
    res.send([categoria1, categoria2])
}

function modificarCategoria(req, res) {
    // simulando una categoria previamente existente que el cliente modifica
    var categoria1 = new Categoria(req.params.id, 'Postres Frios', 'Se incluyen merengues, puddings, carlotas, entre otros')
    var modificaciones = req.body
    categoria1 = { ...categoria1, ...modificaciones }
    res.send(categoria1)
}

function eliminarCategoria(req, res) {
    // se simula una eliminación de una categoria, regresando un 200
    res.status(200).send(`Categoria ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
    crearCategoria,
    obtenerCategorias,
    modificarCategoria,
    eliminarCategoria
}