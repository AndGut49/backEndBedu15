const router = require('express').Router();
const {
    crearPostre,
    consultarPostres,
    consultarPostre,
    consultarPostresLimite,
    modificarPostre,
    eliminarPostre,
    consultarPostresPorAtributos,
    consultarPostresPorCampos
} = require('../controllers/postres')

router.post("/crear", crearPostre);
router.get("/", consultarPostres);
router.get("/consultarlimite/:limit", consultarPostresLimite);
router.get("/consultarporatributos/", consultarPostresPorAtributos);
router.get("/consultarporcampos/", consultarPostresPorCampos);
router.get("/:id", consultarPostre);
router.put("/modificar/:id", modificarPostre);
router.delete("/eliminar/:id", eliminarPostre);

module.exports = router;