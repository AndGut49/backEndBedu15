const Categoria = require('../models/Categoria')
const express = require("express");
const cate = express.Router();
const cors = require("cors");
cate.use(cors());


function crearCategoria(req, res,next) {
    const ctg = Categoria.build(req.body)

    ctg.save().then(categoria => {
        console.log("cree un nueva categoria");
        return res.status(201).json(categoria.toAuthJSON())
    }).catch(next);
}

// cate.get("/consultar", (req, res) => {
//     console.log("Entra a la ruta")
//     Categoria.findAll().then(function(categoria) {
//       res.json(categoria);
//     });
// });

function consultarCategorias(req, res) {
    console.log("Entra a la funcion ")
    
    Categoria.findAll().then(categoria => {
        console.log("Entre a consultar categorias");
        return res.json(categoria)
    }).catch(error => {
        console.log("Este es el error:", error)
        return res.sendStatus(401)
    })
}


function modificarCategoria(req, res, next) {
    const ctg = Categoria.create({
        id: req.params.id,
        ...req.body
    })
    ctg.save().then(categoria => {
        console.log("Modifique categoria");
        return res.status(201).json(categoria.toAuthJSON())
    }).catch(next);
}



function eliminarCategoria(req, res) {
    const ctg = Categoria.findByPk(req.categoria.id);
    if( ctg === null){
        return res.sendStatus(401)
    }else{
        ctg.destroy().then(categoria => {
            console.log("Elimine categoria");
            return res.status(200)
        }).catch(err => {
            return res.sendStatus(500)
        })
    }
}


// exportamos las funciones definidas
module.exports = {
    crearCategoria,
    consultarCategorias,
    modificarCategoria,
    eliminarCategoria
}