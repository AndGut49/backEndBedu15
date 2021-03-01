// Estructura del CRUD
const router = require('express').Router();
const {
    crearCompra,
    obtenerCompras,
    modificarCompra,
    eliminarCompra
} = require('../controllers/compras')

router.get('/', obtenerCompras)
router.post('/', crearCompra)
router.put('/:id', modificarCompra)
router.delete('/:id', eliminarCompra)

module.exports = router;