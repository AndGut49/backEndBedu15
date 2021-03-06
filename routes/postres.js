/* Rutas para la clase Pasteles */
const router = require('express').Router();
const {
    agregarPostre,
    consultarPostres,
    modificarPostre,
    eliminarPostre
} = require('../controllers/postres')

router.post('/', agregarPostre)
router.get('/:id', consultarPostres)
router.put('/:id', modificarPostre)
router.delete('/:id', eliminarPostre)

module.exports = router;