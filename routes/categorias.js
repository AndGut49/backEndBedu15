// Estructura del CRUD
const router = require('express').Router();
const {
    crearCategoria,
    obtenerCategorias,
    modificarCategoria, 
    eliminarCategoria
} = require('../controllers/categorias')

router.get('/', crearCategoria)
router.post('/', obtenerCategorias)
router.put('/:id', modificarCategoria)
router.delete('/:id', eliminarCategoria)

module.exports = router;

