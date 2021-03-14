// Estructura del CRUD
const router = require('express').Router();
const {
    crearUsuario,
    consultarUsuarios,
    modificarUsuario,
    eliminarUsuario,
    login
} = require('../controllers/usuarios')

router.post('/', crearUsuario)
router.get('/consultar', consultarUsuarios)
router.put('/:id', modificarUsuario)
router.delete('/:id', eliminarUsuario)
router.post('/:id',login)

module.exports = router;