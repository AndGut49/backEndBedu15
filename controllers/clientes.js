/*  Archivo controllers/clientes.js
 *  Simulando la respuesta de objetos Cliente
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de clientes
const Cliente = require("../models/Cliente");

function crearCliente(req, res, next) {
    const clnt = Cliente.build(req.body);
    clnt.save()
        .then((cliente) => {
            console.log("cree un nuevo cliente");
            return res.status(201).json(cliente);
        })
        .catch(next);
}

function consultarCliente(req, res) {
    Cliente.findAll()
        .then((cliente) => {
            console.log("Entre consultar cliente");
            return res.json(cliente);
        })
        .catch((error) => {
            return res.sendStatus(401);
        });
}

function modificarCliente(req, res, next) {
    const clnt = Cliente.create({
        id: req.params.id,
        ...req.body,
    });
    clnt.save()
        .then((cliente) => {
            console.log("Modifiquecliente");
            return res.status(201).json(cliente.toAuthJSON());
        })
        .catch(next);
}

function eliminarCliente(req, res) {
    const clnt = Cliente.findByPk(req.cliente.id);
    if (clnt === null) {
        return res.sendStatus(401);
    } else {
        clnt.destroy()
            .then((cliente) => {
                console.log("Elimine cliente");
                return res.status(200);
            })
            .catch((err) => {
                return res.sendStatus(500);
            });
    }
}

// exportamos las funciones definidas
module.exports = {
    crearCliente,
    consultarCliente,
    modificarCliente,
    eliminarCliente,
};
