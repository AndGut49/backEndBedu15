/* Rutas para la clase Pasteles */
const router = require('express').Router();
const {
    crearPostre,
    obtenerPostres,
    modificarPostre,
    eliminarPostre
} = require('../controllers/postres')

router.post('/', crearPostre)
router.get('/:id', obtenerPostres)
router.put('/:id', modificarPostre)
router.delete('/:id', eliminarPostre)

module.exports = router;