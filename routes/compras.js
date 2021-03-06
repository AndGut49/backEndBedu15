// Estructura del CRUD
const router = require('express').Router();
const {
    crearCompra,
    consultarCompras,
    modificarCompra,
    eliminarCompra
} = require('../controllers/compras')

router.get('/', crearCompra)
router.post('/', consultarCompras)
router.put('/:id', modificarCompra)
router.delete('/:id', eliminarCompra)

module.exports = router;