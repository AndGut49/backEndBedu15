  // Estructura del CRUD
const router = require('express').Router();
const cors = require("cors");
router.use(cors());
const {
    crearCliente,
    consultarClientes,
    consultarCliente,
    consultarClientesLimite,
    modificarCliente,
    eliminarCliente,
    consultarClientesPorAtributos,
    consultarClientesPorCampos
} = require('../controllers/clientes')

router.post("/crear", crearCliente);
router.get("/", consultarClientes);
router.get("/consultarlimite/:limit", consultarClientesLimite);
router.get("/consultarporatributos/", consultarClientesPorAtributos);
router.get("/consultarporcampos/", consultarClientesPorCampos);
router.get("/:id", consultarCliente);
router.put("/modificar/:id", modificarCliente);
router.delete("/eliminar/:id", eliminarCliente);

module.exports = router;
  