  // Estructura del CRUD
const router = require('express').Router();
const cors = require("cors");
router.use(cors());
const {
    crearCliente,
    consultarCliente,
    modificarCliente,
    eliminarCliente,
} = require('../controllers/clientes')

router.post('/', crearCliente)
router.get('/consultar', consultarCliente)
router.put('/:id', modificarCliente)
router.delete('/:id', eliminarCliente)

module.exports = router;
  