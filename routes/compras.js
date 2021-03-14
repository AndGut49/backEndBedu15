// Estructura del CRUD
const router = require('express').Router();
const {
    crearCompra,
    consultarCompras,
    modificarCompra,
    eliminarCompra
} = require('../controllers/compras')

router.post('/', crearCompra)
router.get('/consultar', consultarCompras)
router.put('/:id', modificarCompra)
router.delete('/:id', eliminarCompra)

module.exports = router;