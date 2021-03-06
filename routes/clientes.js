  // Estructura del CRUD
const router = require('express').Router();
const {
    crearCliente,
    consultarCliente,
    modificarCliente,
    eliminarCliente,
} = require('../controllers/clientes')

router.get('/', crearCliente)
router.post('/', consultarCliente)
router.put('/:id', modificarCliente)
router.delete('/:id', eliminarCliente)

module.exports = router;
  