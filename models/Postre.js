/*GENERACION DEL MODELO DE Postre USANDO SEQUELIZE*/

// importamos por separado los métodos de Sequelize y los tipos de dato.
// const { Sequelize, DataTypes } = require('sequelize');
// // importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
// const sequelize = new Sequelize('mysql::memory:');
const { DataTypes } = require("sequelize");
const db = require("../config/db");
//exportando los modelos de Sabor, Tamanio y Categoria para relacionar las llaves foraneas
const Sabor = require("../models/Sabor");
const Tamanio = require("../models/Tamanio");
const Categoria = require("../models/Categoria");

//creamos el modelo para postre
const Postre = db.sequelize.define(
    "postre",
    {
        idPostre: {
            // se indica el tipo de dato de la columna.
            type: DataTypes.INTEGER,
            // indicamos que este campo es llave primaria
            primaryKey: true,
            // indicamos que el campo no admite valores null
            allowNull: false,
            AUTO_INCREMENT: true,
        },
        idSabor: {
            type: DataTypes.INTEGER,
            // indicamos que el campo no admite valores null
            allowNull: false,
            references: { model: Sabor, key: "idSabor" },
        },
        idTamanio: {
            type: DataTypes.INTEGER,
            // indicamos que el campo no admite valores null
            allowNull: false,
            references: { model: Tamanio, key: "idTamanio" },
        },
        idCategoria: {
            type: DataTypes.INTEGER,
            // indicamos que el campo no admite valores null
            allowNull: false,
            references: { model: Categoria, key: "idCategoria" },
        },
        nombre: {
            type: DataTypes.STRING(30),
            // indicamos que el campo no admite valores null
            allowNull: false,
        },
        precio: {
            type: DataTypes.FLOAT,
            // indicamos que el campo no admite valores null
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            // indicamos que el campo no admite valores null
            allowNull: false,
        },

        // le decimos a que tabla de nuestra base de datos corresponde.
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "postre",
    }
);
Postre.belongsTo(Sabor, {
    foreignKey: "idSabor",
});
Postre.belongsTo(Tamanio, {
    foreignKey: "idTamanio",
});
Postre.belongsTo(Categoria, {
    foreignKey: "idCategoria",
});


// //Relacion una Categoria puede tener diferentes popstres
// Categoria.hasMany(Postre, { as: "Categorias", foreignKey: "idCategoria" });

// //Relacion un un sabor puede estar en diferentes postres, un postre puede tener un solo sabor
// Sabor.hasMany(Postre, { as: "Sabores", foreignKey: "idSabor" });

//Relacion un postre puede tener diferentes tamanios y un tamanio se puede encontrar en diferentes postre
// Postre.belongsToMany(Tamanio, {
//     as: "Tamanios",
//     through: "postre_tamanio",
//     foreignKey: "idTamanio",
// });
// Tamanio.belongsToMany(Postre, {
//     as: "Postres",
//     through: "postre_tamanio",
//     foreignKey: "idPostre",
// });

module.exports = Postre;
