const router = require('express').Router();
const {
    crearSabor,
    consultarSabores,
    consultarSabor,
    modificarSabor,
    eliminarSabor,
    consultarSaboresLimite,
    consultarSaboresPorNombre,
} = require('../controllers/sabores')

router.post("/crear", crearSabor);
router.get("/", consultarSabores);
router.get("/consultarlimite/:limit", consultarSaboresLimite);
router.get("/consultarpornombre/", consultarSaboresPorNombre);
router.get("/:id", consultarSabor);
router.put("/modificar/:id", modificarSabor);
router.delete("/eliminar/:id", eliminarSabor);

module.exports = router;