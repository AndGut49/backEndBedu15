
const Tamanio = require('../models/Tamanio')

function crearTamanio (req,res) {
    const tmn = Tamanio.build(req.body)

    tmn.save().then(tamnio => {
        console.log("cree un nuevo tamanio");
        return res.status(201).json(tamanio.toAuthJSON())
    }).catch(next);
}
function consultarTamanio (req,res) {
    Tamanio.findAll().then(tamanio => {
        console.log("Entre consultar tamanio");
        return res.json(tamanio)
    }).catch(error => {
        return res.sendStatus(401)
    })
}
function modificarTamanio (req,res) {
    const tmn = Tamanio.create({
        id: req.params.id,
        ...req.body
    })
    tmn.save().then(tamanio => {
        console.log("Modifique tamanio");
        return res.status(201).json(tamanio.toAuthJSON())
    }).catch(next);
}
function eliminarTamanio (req,res) {
    const tmn = Tamanio.findByPk(req.tamanio.id);
    if (tmn === null) {
        return res.sendStatus(401)
    } else {
        tmn.destroy().then(tamanio => {
            console.log("Elimine tamanio");
            return res.status(200)
        }).catch(err => {
            return res.sendStatus(500)
        })
    }
} 

// exportamos las funciones definidas
module.exports = {
    crearTamanio,
    consultarTamanio,
    modificarTamanio,
    eliminarTamanio    
}
