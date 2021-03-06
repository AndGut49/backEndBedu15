// Estructura del CRUD
const router = require('express').Router();
const {
    crearCategoria,
    consultarCategorias,
    modificarCategoria, 
    eliminarCategoria
} = require('../controllers/categorias')

router.get('/', crearCategoria)
router.post('/', consultarCategorias)
router.put('/:id', modificarCategoria)
router.delete('/:id', eliminarCategoria)

module.exports = router;

