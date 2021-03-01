// Estructura del CRUD
const router = require('express').Router();
const {
    crearTamanio,
    actualizarTamanio,
    eliminarTamanio,
    consultarTamanio
} = require('../controllers/tamanios')

router.get('/', crearTamanio)
router.post('/', consultarTamanio)
router.put('/:id', eliminarTamanio)
router.delete('/:id', actualizarTamanio)

module.exports = router;

