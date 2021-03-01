  // Estructura del CRUD
const router = require('express').Router();
const {
    agregarCliente,
    consultarCliente,
    actualizarDatosCliente,
    eliminarCliente,
} = require('../controllers/clientes')

router.get('/', agregarCliente)
router.post('/', consultarCliente)
router.put('/:id', actualizarDatosCliente)
router.delete('/:id', eliminarCliente)

module.exports = router;
  