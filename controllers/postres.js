/*  Archivo controllers/postres.js
 *  Simulando la respuesta de objetos Postre
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de Postre
const Postre = require('../models/Postre')

function crearPostre(req, res,next) {
    const ptr = Postre.build(req.body)

    ptr.save().then(postre => {
        console.log("cree un nuevo postre");
        return res.status(201).json(postre.toAuthJSON())
    }).catch(next);
}

function consultarPostres(req, res) {
    Postre.findAll().then(postre => {
        console.log("Entre consultar postre");
        return res.json(postre)
    }).catch(error => {
        return res.sendStatus(401)
    })
}

function modificarPostre(req, res) {
    const ptr = Postre.create({
        id: req.params.id,
        ...req.body
    })
    ptr.save().then(postre => {
        console.log("Modifique postre");
        return res.status(201).json(postre.toAuthJSON())
    }).catch(next);
}

function eliminarPostre(req, res) {
    const ptr = Postre.findByPk(req.postre.id);
    if (ptr === null) {
        return res.sendStatus(401)
    } else {
        ptr.destroy().then(postre => {
            console.log("Elimine postre");
            return res.status(200)
        }).catch(err => {
            return res.sendStatus(500)
        })
    }
}

// exportamos las funciones definidas
module.exports = {
    crearPostre,
    consultarPostres,
    modificarPostre,
    eliminarPostre
}