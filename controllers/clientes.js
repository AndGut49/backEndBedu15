const Cliente = require("../models/Cliente");
function crearCliente(req, res, next) {
    const ctg = Cliente.build(req.body);
    ctg.save()
        .then((Cliente) => {
            console.log("Se crea nueva Cliente");
            return res.sendStatus(201).json(Cliente);
        })
        .catch(next);
}

function consultarClientes(req, res) {
    Cliente.findAll()
        .then((Cliente) => {
            console.log("Entre a consultar Clientes");
            return res.json(Cliente);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarClientesLimite(req, res) {
    console.log("Este es el req.params.limit", req.params.limit);
    const limite = parseInt(req.params.limit, 10);
    Cliente.findAll({ limit: limite })
        .then((Cliente) => {
            console.log("Entre a consultar Clientes");
            return res.json(Cliente);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarClientesPorAtributos(req, res) {
    Cliente.findAll({ where: { ...req.body } })
        .then((Cliente) => {
            console.log("Entre a consultar Clientes");
            return res.json(Cliente);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarClientesPorCampos(req, res) {
    Cliente.findAll({
        attributes: req.body.campos,
    })
        .then((Cliente) => {
            console.log("Entre a consultar Clientes");
            return res.json(Cliente);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarCliente(req, res) {
    Cliente.findOne({
        where: {
            idCliente: req.params.id,
        },
    })
        .then((Cliente) => {
            console.log("Entre a consultar Cliente");
            if (Cliente) {
                return res.json(Cliente);
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(404);
        });
}

function modificarCliente(req, res) {
    Cliente.findOne({
        where: {
            idCliente: req.params.id,
        },
    })
        .then((ClienteInfo) => {
            if (ClienteInfo) {
                Cliente.update(
                    { ...req.body },
                    {
                        where: {
                            idCliente: req.params.id,
                        },
                    }
                )
                    .then((Cliente) => {
                        console.log("Actualice Cliente");
                        return res.sendStatus(200).json(Cliente);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion modificarCliente: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarCliente", error);
            res.sendStatus(500);
        });
}

function eliminarCliente(req, res) {
    Cliente.findOne({
        where: {
            idCliente: req.params.id,
        },
    })
        .then((ClienteInfo) => {
            if (ClienteInfo) {
                Cliente.destroy({
                    where: {
                        idCliente: req.params.id,
                    },
                })
                    .then((Cliente) => {
                        console.log("Elimine Cliente");
                        return res.sendStatus(200);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion eliminaCliente: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarCliente", error);
            res.sendStatus(500);
        });
}

module.exports = {
    crearCliente,
    consultarClientes,
    consultarCliente,
    modificarCliente,
    eliminarCliente,
    consultarClientesLimite,
    consultarClientesPorAtributos,
    consultarClientesPorCampos,
};
