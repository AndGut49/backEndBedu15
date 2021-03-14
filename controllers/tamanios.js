
const Tamanio = require('../models/Tamanio')

function crearTamanio(req, res, next) {
    const ctg = Tamanio.build(req.body);
    ctg.save()
        .then((Tamanio) => {
            console.log("Se crea nueva Tamanio");
            return res.sendStatus(201).json(Tamanio);
        })
        .catch(next);
}

function consultarTamanios(req, res) {
    Tamanio.findAll()
        .then((Tamanio) => {
            console.log("Entre a consultar Tamanios");
            return res.json(Tamanio);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarTamaniosLimite(req, res) {
    console.log("Este es el req.params.limit", req.params.limit);
    const limite = parseInt(req.params.limit, 10);
    Tamanio.findAll({ limit: limite })
        .then((Tamanio) => {
            console.log("Entre a consultar Tamanios");
            return res.json(Tamanio);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarTamaniosPorNombre(req, res) {
    Tamanio.findAll({ where: { ...req.body } })
        .then((Tamanio) => {
            console.log("Entre a consultar Tamanios");
            return res.json(Tamanio);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarTamanio(req, res) {
    Tamanio.findOne({
        where: {
            idTamanio: req.params.id,
        },
    })
        .then((Tamanio) => {
            console.log("Entre a consultar Tamanio");
            if (Tamanio) {
                return res.json(Tamanio);
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(404);
        });
}

function modificarTamanio(req, res) {
    Tamanio.findOne({
        where: {
            idTamanio: req.params.id,
        },
    })
        .then((TamanioInfo) => {
            if (TamanioInfo) {
                Tamanio.update(
                    { nombreTamanio: req.body.nombreTamanio },
                    {
                        where: {
                            idTamanio: req.params.id,
                        },
                    }
                )
                    .then((Tamanio) => {
                        console.log("Actualice Tamanio");
                        return res.sendStatus(200).json(Tamanio);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion modificarTamanio: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarTamanio", error);
            res.sendStatus(500);
        });
}

function eliminarTamanio(req, res) {
    Tamanio.findOne({
        where: {
            idTamanio: req.params.id,
        },
    })
        .then((TamanioInfo) => {
            if (TamanioInfo) {
                Tamanio.destroy({
                    where: {
                        idTamanio: req.params.id,
                    },
                })
                    .then((Tamanio) => {
                        console.log("Elimine Tamanio");
                        return res.sendStatus(200);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion eliminaTamanio: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarTamanio", error);
            res.sendStatus(500);
        });
}

module.exports = {
    crearTamanio,
    consultarTamanios,
    consultarTamanio,
    modificarTamanio,
    eliminarTamanio,
    consultarTamaniosLimite,
    consultarTamaniosPorNombre, 
}
