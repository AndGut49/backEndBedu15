const router = require('express').Router();
const {
    crearTamanio,
    consultarTamanios,
    consultarTamanio,
    modificarTamanio,
    eliminarTamanio,
    consultarTamaniosLimite,
    consultarTamaniosPorNombre,
} = require('../controllers/tamanios')

router.post("/crear", crearTamanio);
router.get("/", consultarTamanios);
router.get("/consultarlimite/:limit", consultarTamaniosLimite);
router.get("/consultarpornombre/", consultarTamaniosPorNombre);
router.get("/:id", consultarTamanio);
router.put("/modificar/:id", modificarTamanio);
router.delete("/eliminar/:id", eliminarTamanio);

module.exports = router;

