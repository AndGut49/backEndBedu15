/* Rutas para la clase Pasteles */
const router = require('express').Router();
const {
    crearPostre,
    consultarPostres,
    modificarPostre,
    eliminarPostre
} = require('../controllers/postres')

router.post('/', crearPostre)
router.get('/:id', consultarPostres)
router.put('/:id', modificarPostre)
router.delete('/:id', eliminarPostre)

module.exports = router;