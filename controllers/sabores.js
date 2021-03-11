
// importamos el modelo de Sabor
const Sabor = require('../models/Sabor')

function crearSabor(req, res,next) {
    const sbr = Sabor.build(req.body)

    sbr.save().then(sabor =>{
        console.log("cree un nuevo sabor");
        return res.status(201).json(sabor.toAuthJSON())
    }).catch(next);
}

function consultarSabor(req, res) {
    Sabor.findAll().then(sabor => {
        console.log("Entre consultar sabor");
        return res.json(sabor)
    }).catch(error => {
        return res.sendStatus(401)
    })
}

function modificarSabor(req, res,next) {
    const sbr = Sabor.create({
        id: req.params.id,
        ...req.body
    })
    sbr.save().then(sabor => {
        console.log("Modifique sabor");
        return res.status(201).json(sabor.toAuthJSON())
    }).catch(next);
}

function eliminarSabor(req, res) {
    const sbr = Sabor.findByPk(req.sabor.id);
    if(sbr === null){
        return res.sendStatus(401)
    }else{
        sbr.destroy().then(sbr => {
            console.log("Elimine sabor");
            return res.status(200)
        }).catch(err => {
            return res.sendStatus(500)
        })
    }
}

// exportamos las funciones definidas
module.exports = {
    crearSabor,
    consultarSabor,
    modificarSabor,
    eliminarSabor
}