// Estructura del CRUD
const router = require("express").Router();
const cors = require("cors");
router.use(cors());
const {
    crearCategoria,
    consultarCategorias,
    modificarCategoria,
    eliminarCategoria,
} = require("../controllers/categorias");

router.post("/", crearCategoria);
router.get("/consultar", consultarCategorias);
router.put("/:id", modificarCategoria);
router.delete("/:id", eliminarCategoria);

module.exports = router;
