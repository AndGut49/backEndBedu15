// Estructura del CRUD
const router = require('express').Router();
const {
    agregarCompra,
    consultarCompras,
    modificarCompra,
    eliminarCompra
} = require('../controllers/compras')

router.get('/', agregarCompra)
router.post('/', consultarCompras)
router.put('/:id', modificarCompra)
router.delete('/:id', eliminarCompra)

module.exports = router;