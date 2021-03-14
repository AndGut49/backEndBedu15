// Estructura del CRUD
const router = require("express").Router();
const cors = require("cors");
router.use(cors());
const {
    crearCategoria,
    consultarCategorias,
    consultarCategoria,
    modificarCategoria,
    eliminarCategoria,
    consultarCategoriasLimite,
} = require("../controllers/categorias");

router.post("/crear", crearCategoria);
router.get("/", consultarCategorias);
router.get("/consultarlimite/:limit", consultarCategoriasLimite);
router.get("/:id", consultarCategoria);
router.put("/modificar/:id", modificarCategoria);
router.delete("/eliminar/:id", eliminarCategoria);

module.exports = router;
