  // Estructura del CRUD
const router = require('express').Router();
const {
    agregarCliente,
    consultarCliente,
    modificarCliente,
    eliminarCliente,
} = require('../controllers/clientes')

router.get('/', agregarCliente)
router.post('/', consultarCliente)
router.put('/:id', modificarCliente)
router.delete('/:id', eliminarCliente)

module.exports = router;
  