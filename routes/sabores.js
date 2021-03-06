/* Rutas para la clase Sabores */
const router = require('express').Router();
const {
    crearSabor,
    consultarSabor,
    modificarSabor,
    eliminarSabor
} = require('../controllers/sabores')

router.post('/', crearSabor)
router.get('/:id', consultarSabor)
router.put('/:id', modificarSabor)
router.delete('/:id', eliminarSabor)

module.exports = router;