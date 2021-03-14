
// importamos el modelo de Compra 
const Compra = require('../models/Compra')

function crearCompra(req, res,next) {
  const cmp = Compra.build(req.body)

  cmp.save().then(compra => {
    console.log("cree una nueva compra");
    return res.status(201).json(compra.toAuthJSON())
  }).catch(next);
}

function consultarCompras(req, res) {
  Compra.findAll().then(compra => {
    console.log("Entre consultar compra");
    return res.json(compra)
  }).catch(error => {
    return res.sendStatus(401)
  })
}


function modificarCompra(req, res,next) {
  const cmp = Compra.create({
    id: req.params.id,
    ...req.body
  })
  cmp.save().then(compra => {
    console.log("Modifique compra");
    return res.status(201).json(compra.toAuthJSON())
  }).catch(next);
}


function eliminarCompra(req, res) {
  const cmp = Compra.findByPk(req.compra.id);
  if (cmp === null) {
    return res.sendStatus(401)
  } else {
    cmp.destroy().then(compra => {
      console.log("Elimine compra");
      return res.status(200)
    }).catch(err => {
      return res.sendStatus(500)
    })
  }
}

// exportamos las funciones definidas
module.exports = {
  crearCompra,
  consultarCompras,
  modificarCompra,
  eliminarCompra
}