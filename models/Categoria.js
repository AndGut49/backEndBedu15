/*GENERACION DEL MODELO DE Categoria USANDO SEQUELIZE*/

// importamos por separado los métodos de Sequelize y los tipos de dato.
// const { Sequelize, DataTypes } = require('sequelize');
// importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
// const sequelize = new Sequelize('mysql::memory:');
// const sequelize = new Sequelize();
//creamos el modelo para categoria
// const Sequelize = require('sequelize')
const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Categoria = db.sequelize.define(
    "categoria",
    {
        idCategoria: {
            // se indica el tipo de dato de la columna.
            type: DataTypes.INTEGER,
            // indicamos que este campo es llave primaria
            primaryKey: true,
            // indicamos que el campo no admite valores null
            allowNull: false,
            AUTO_INCREMENT: true,
        },
        nombreCategoria: {
            type: DataTypes.STRING,
            // indicamos que el campo no admite valores null
            allowNull: false,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "categoria"
    }
    
);
// exportamos el modelo.
module.exports = Categoria;
