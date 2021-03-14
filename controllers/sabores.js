
const Sabor = require('../models/Sabor')

function crearSabor(req, res, next) {
    const ctg = Sabor.build(req.body);
    ctg.save()
        .then((sabor) => {
            console.log("Se crea nuevo sabor");
            return res.sendStatus(201).json(sabor);
        })
        .catch(next);
}

function consultarSabores(req, res) {
    Sabor.findAll()
        .then((sabor) => {
            console.log("Entre a consultar sabores");
            return res.json(sabor);
        })
        .catch((error) => {
            console.log("Este es el error en consultar sabor:", error);
            return res.sendStatus(401);
        });
}

function consultarSaboresLimite(req, res) {
    console.log("Este es el req.params.limit", req.params.limit);
    const limite = parseInt(req.params.limit, 10);
    Sabor.findAll({ limit: limite })
        .then((sabor) => {
            console.log("Entre a consultar sabor por limite");
            return res.json(sabor);
        })
        .catch((error) => {
            console.log("Este es el error en consultar sabores limite:", error);
            return res.sendStatus(401);
        });
}

function consultarSaboresPorNombre(req, res) {
    Sabor.findAll({ where: { ...req.body } })
        .then((sabor) => {
            console.log("Entre a consultar categorias");
            return res.json(sabor);
        })
        .catch((error) => {
            console.log("Este es el error en consultar sabores por nombre:", error);
            return res.sendStatus(401);
        });
}

function consultarSabor(req, res) {
    Sabor.findOne({
        where: {
            idSabor: req.params.id,
        },
    })
        .then((sabor) => {
            console.log("Entre a consultar categoria");
            if (sabor) {
                return res.json(sabor);
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(404);
        });
}

function modificarSabor(req, res) {
    Sabor.findOne({
        where: {
            idSabor: req.params.id,
        },
    })
        .then((SaborInfo) => {
            if (SaborInfo) {
                Sabor.update(
                    { nombreSabor: req.body.nombreSabor },
                    {
                        where: {
                            idSabor: req.params.id,
                        },
                    }
                )
                    .then((sabor) => {
                        console.log("Actualice sabor");
                        return res.sendStatus(200).json(sabor);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion modificarSabor: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion modificarSabor", error);
            res.sendStatus(500);
        });
}

function eliminarSabor(req, res) {
    Sabor.findOne({
        where: {
            idSabor: req.params.id,
        },
    })
        .then((SaborInfo) => {
            if (SaborInfo) {
                Sabor.destroy({
                    where: {
                        idSabor: req.params.id,
                    },
                })
                    .then((sabor) => {
                        console.log("Elimine sabor",sabor);
                        return res.sendStatus(200);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion eliminarSabor: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarSabor", error);
            res.sendStatus(500);
        });
}

module.exports = {
    crearSabor,
    consultarSabores,
    consultarSabor,
    modificarSabor,
    eliminarSabor,
    consultarSaboresLimite,
    consultarSaboresPorNombre,
}