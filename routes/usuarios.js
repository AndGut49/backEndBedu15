// Estructura del CRUD
const router = require('express').Router();
const {
    crearUsuario,
    consultarUsuarios,
    modificarUsuario,
    eliminarUsuario,
    login
} = require('../controllers/usuarios')

router.get('/', crearUsuario)
router.post('/', consultarUsuarios)
router.put('/:id', modificarUsuario)
router.delete('/:id', eliminarUsuario)
router.post('/:id',login)

module.exports = router;