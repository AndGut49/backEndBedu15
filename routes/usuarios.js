// Estructura del CRUD
const router = require('express').Router();
const {
    agregarUsuario,
    consultarUsuarios,
    modificarUsuario,
    eliminarUsuario,
    login
} = require('../controllers/usuarios')

router.get('/', agregarUsuario)
router.post('/', consultarUsuarios)
router.put('/:id', modificarUsuario)
router.delete('/:id', eliminarUsuario)
router.post('/:id',login)

module.exports = router;