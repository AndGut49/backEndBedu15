const Compra = require("../models/Compra");
const Postre = require("../models/Postre");
const Cliente = require("../models/Cliente");

function crearCompra(req, res, next) {
    const ctg = Compra.build(req.body);
    ctg.save()
        .then((Compra) => {
            console.log("Se crea nueva Compra");
            return res.sendStatus(201).json(Compra);
        })
        .catch(next);
}

function consultarCompras(req, res) {
    Compra.findAll({ include: [Cliente, Postre] })
        .then((Compra) => {
            console.log("Entre a consultar Compras");
            return res.json(Compra);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarComprasLimite(req, res) {
    console.log("Este es el req.params.limit", req.params.limit);
    const limite = parseInt(req.params.limit, 10);
    Compra.findAll({ limit: limite, include: [Cliente, Postre] })
        .then((Compra) => {
            console.log("Entre a consultar Compras");
            return res.json(Compra);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarComprasPorAtributos(req, res) {
    Compra.findAll({ where: { ...req.body }, include: [Cliente, Postre] })
        .then((Compra) => {
            console.log("Entre a consultar Compras");
            return res.json(Compra);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarComprasPorCampos(req, res) {
    Compra.findAll({
        attributes: req.body.campos,
    })
        .then((Compra) => {
            console.log("Entre a consultar Compras");
            return res.json(Compra);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarCompra(req, res) {
    Compra.findOne({
        where: {
            idCompra: req.params.id,
        },
    })
        .then((Compra) => {
            console.log("Entre a consultar Compra");
            if (Compra) {
                return res.json(Compra);
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(404);
        });
}

function modificarCompra(req, res) {
    Compra.findOne({
        where: {
            idCompra: req.params.id,
        },
    })
        .then((CompraInfo) => {
            if (CompraInfo) {
                Compra.update(
                    { ...req.body },
                    {
                        where: {
                            idCompra: req.params.id,
                        },
                    }
                )
                    .then((Compra) => {
                        console.log("Actualice Compra");
                        return res.sendStatus(200).json(Compra);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion modificarCompra: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarCompra", error);
            res.sendStatus(500);
        });
}

function eliminarCompra(req, res) {
    Compra.findOne({
        where: {
            idCompra: req.params.id,
        },
    })
        .then((CompraInfo) => {
            if (CompraInfo) {
                Compra.destroy({
                    where: {
                        idCompra: req.params.id,
                    },
                })
                    .then((Compra) => {
                        console.log("Elimine Compra", Compra);
                        return res.sendStatus(200);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion eliminaCompra: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarCompra", error);
            res.sendStatus(500);
        });
}

module.exports = {
    crearCompra,
    consultarCompras,
    consultarCompra,
    modificarCompra,
    eliminarCompra,
    consultarComprasLimite,
    consultarComprasPorAtributos,
    consultarComprasPorCampos,
};
