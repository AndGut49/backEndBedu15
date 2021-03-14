/*GENERACION DEL MODELO DE Tamanio USANDO SEQUELIZE*/

// importamos por separado los métodos de Sequelize y los tipos de dato.
// const { Sequelize, DataTypes } = require('sequelize');
// // importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
// const sequelize = new Sequelize('mysql::memory:');
const { DataTypes } = require("sequelize");
const db = require("../config/db");

//creamos el modelo para tamanio
const Tamanio = db.sequelize.define(
    "tamanio",
    {
        idTamanio: {
            // se indica el tipo de dato de la columna.
            type: DataTypes.INTEGER,
            // indicamos que este campo es llave primaria
            primaryKey: true,
            // indicamos que el campo no admite valores null
            allowNull: false,
            AUTO_INCREMENT: true,
        },
        nombreTamanio: {
            type: DataTypes.STRING,
        },
        // le decimos a que tabla de nuestra base de datos corresponde.
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "tamanio",
    }
);

module.exports = Tamanio;
