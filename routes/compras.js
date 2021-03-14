// Estructura del CRUD
const router = require('express').Router();
const {
    crearCompra,
    consultarCompras,
    consultarCompra,
    consultarComprasLimite,
    modificarCompra,
    eliminarCompra,
    consultarComprasPorAtributos,
    consultarComprasPorCampos
} = require('../controllers/compras')

router.post("/crear", crearCompra);
router.get("/", consultarCompras);
router.get("/consultarlimite/:limit", consultarComprasLimite);
router.get("/consultarporatributos/", consultarComprasPorAtributos);
router.get("/consultarporcampos/", consultarComprasPorCampos);
router.get("/:id", consultarCompra);
router.put("/modificar/:id", modificarCompra);
router.delete("/eliminar/:id", eliminarCompra);

module.exports = router;