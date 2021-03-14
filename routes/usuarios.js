const router = require('express').Router();
const {
    crearUsuario,
    consultarUsuarios,
    consultarUsuario,
    consultarUsuariosLimite,
    modificarUsuario,
    eliminarUsuario,
    consultarUsuariosPorAtributos,
    consultarUsuariosPorCampos
} = require('../controllers/usuarios')

router.post("/crear", crearUsuario);
router.get("/", consultarUsuarios);
router.get("/consultarlimite/:limit", consultarUsuariosLimite);
router.get("/consultarporatributos/", consultarUsuariosPorAtributos);
router.get("/consultarporcampos/", consultarUsuariosPorCampos);
router.get("/:id", consultarUsuario);
router.put("/modificar/:id", modificarUsuario);
router.delete("/eliminar/:id", eliminarUsuario);

module.exports = router;