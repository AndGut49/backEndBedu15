// Estructura del CRUD
const router = require('express').Router();
const {
    crearTamanio,
    modificarTamanio,
    eliminarTamanio,
    consultarTamanio
} = require('../controllers/tamanios')

router.post('/', crearTamanio)
router.get('/consultar', consultarTamanio)
router.put('/:id', eliminarTamanio)
router.delete('/:id', modificarTamanio)

module.exports = router;

