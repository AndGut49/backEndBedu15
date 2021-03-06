// Estructura del CRUD
const router = require('express').Router();
const {
    crearTamanio,
    modificarTamanio,
    eliminarTamanio,
    consultarTamanio
} = require('../controllers/tamanios')

router.get('/', crearTamanio)
router.post('/', consultarTamanio)
router.put('/:id', eliminarTamanio)
router.delete('/:id', modificarTamanio)

module.exports = router;

