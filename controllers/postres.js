const Postre = require('../models/Postre')
const Sabor = require('../models/Sabor')
const Tamanio = require('../models/Tamanio')
const Categoria = require('../models/Categoria')

function crearPostre(req, res, next) {
    const ctg = Postre.build(req.body);
    ctg.save()
        .then((Postre) => {
            console.log("Se crea nueva Postre");
            return res.sendStatus(201).json(Postre);
        })
        .catch(next);
}

function consultarPostres(req, res) {
    Postre.findAll({include: [Sabor, Tamanio, Categoria]})
        .then((Postre) => {
            console.log("Entre a consultar Postres");
            return res.json(Postre);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarPostresLimite(req, res) {
    console.log("Este es el req.params.limit", req.params.limit);
    const limite = parseInt(req.params.limit, 10);
    Postre.findAll({ limit: limite,include: [Sabor, Tamanio, Categoria] })
        .then((Postre) => {
            console.log("Entre a consultar Postres");
            return res.json(Postre);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarPostresPorAtributos(req, res) {
    Postre.findAll({ where: { ...req.body },include: [Sabor, Tamanio, Categoria] })
        .then((Postre) => {
            console.log("Entre a consultar Postres");
            return res.json(Postre);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarPostresPorCampos(req,res){
    Postre.findAll({
        attributes: req.body.campos
    }).then((Postre) => {
        console.log("Entre a consultar Postres");
        return res.json(Postre);
    })
    .catch((error) => {
        console.log("Este es el error:", error);
        return res.sendStatus(401);
    });
}

function consultarPostre(req, res) {
    Postre.findOne({
        where: {
            idPostre: req.params.id,
        },
        include: [Sabor, Tamanio, Categoria]
    })
        .then((Postre) => {
            console.log("Entre a consultar Postre");
            if (Postre) {
                return res.json(Postre);
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(404);
        });
}

function modificarPostre(req, res) {
    Postre.findOne({
        where: {
            idPostre: req.params.id,
        },
    })
        .then((PostreInfo) => {
            if (PostreInfo) {
                Postre.update(
                    { ...req.body },
                    {
                        where: {
                            idPostre: req.params.id,
                        },
                    }
                )
                    .then((Postre) => {
                        console.log("Actualice Postre");
                        return res.sendStatus(200).json(Postre);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion modificarPostre: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarPostre", error);
            res.sendStatus(500);
        });
}

function eliminarPostre(req, res) {
    Postre.findOne({
        where: {
            idPostre: req.params.id,
        },
    })
        .then((PostreInfo) => {
            if (PostreInfo) {
                Postre.destroy({
                    where: {
                        idPostre: req.params.id,
                    },
                })
                    .then((Postre) => {
                        console.log("Elimine Postre", Postre);
                        return res.sendStatus(200);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion eliminaPostre: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarPostre", error);
            res.sendStatus(500);
        });
}

module.exports = {
    crearPostre,
    consultarPostres,
    consultarPostre,
    modificarPostre,
    eliminarPostre,
    consultarPostresLimite,
    consultarPostresPorAtributos,
    consultarPostresPorCampos
};