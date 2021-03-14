const Categoria = require("../models/Categoria");

function crearCategoria(req, res, next) {
    const ctg = Categoria.build(req.body);
    ctg.save()
        .then((categoria) => {
            console.log("Se crea nueva categoria");
            return res.sendStatus(201).json(categoria);
        })
        .catch(next);
}

function consultarCategorias(req, res) {
    Categoria.findAll()
        .then((categoria) => {
            console.log("Entre a consultar categorias");
            return res.json(categoria);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}
function consultarCategoriasLimite(req, res) {
    console.log("Este es el req.params.limit", req.params.limit)
    const limite = parseInt(req.params.limit, 10)
    Categoria.findAll({limit:limite})
        .then((categoria) => {
            console.log("Entre a consultar categorias");
            return res.json(categoria);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}
function consultarCategoria(req, res) {
    Categoria.findOne({
        where: {
            idCategoria: req.params.id,
        },
    })
        .then((categoria) => {
            console.log("Entre a consultar categoria");
            if(categoria){
                return res.json(categoria);
            }else{
                return res.sendStatus(404);
            }
            
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(404);
        });
}

function modificarCategoria(req, res) {
    Categoria.findOne({
        where: {
            idCategoria: req.params.id,
        },
    })
        .then((CategoriaInfo) => {
            if (CategoriaInfo) {
                Categoria.update(
                    { nombreCategoria: req.body.nombreCategoria },
                    {
                        where: {
                            idCategoria: req.params.id,
                        },
                    }
                )
                    .then((categoria) => {
                        console.log("Actualice categoria");
                        return res.sendStatus(200).json(categoria);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion modificarCategoria: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarCategoria", error);
            res.sendStatus(500);
        });
}

function eliminarCategoria(req, res) {
    Categoria.findOne({
        where: {
            idCategoria: req.params.id,
        },
    })
        .then((CategoriaInfo) => {
            if (CategoriaInfo) {
                Categoria.destroy({
                    where: {
                        idCategoria: req.params.id,
                    },
                })
                    .then((categoria) => {
                        console.log("Elimine categoria");
                        return res.sendStatus(200);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion eliminaCategoria: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarCategoria", error);
            res.sendStatus(500);
        });
}

// exportamos las funciones definidas
module.exports = {
    crearCategoria,
    consultarCategorias,
    consultarCategoriasLimite,
    consultarCategoria,
    modificarCategoria,
    eliminarCategoria,
};
