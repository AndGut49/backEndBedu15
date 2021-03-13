/*GENERACION DEL MODELO DE Sabor USANDO SEQUELIZE*/

// importamos por separado los métodos de Sequelize y los tipos de dato.
// const { Sequelize, DataTypes } = require('sequelize');
// // importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
// const sequelize = new Sequelize('mysql::memory:');
const { DataTypes } = require("sequelize");
const db = require("../config/db");

//creamos el modelo para sabor
const Sabor = db.sequelize.define(
    "sabor",
    {
        idSabor: {
            // se indica el tipo de dato de la columna.
            type: DataTypes.INTEGER,
            // indicamos que este campo es llave primaria
            primaryKey: true,
            // indicamos que el campo no admite valores null
            allowNull: false,
            AUTO_INCREMENT: true,
        },
        nombreSabor: {
            type: DataTypes.STRING(40),
            // indicamos que el campo no admite valores null
            allowNull: false,
        },
        // le decimos a que tabla de nuestra base de datos corresponde.
    },
    { 
        timestamps: false,
        freezeTableName: true,
        tableName: "sabor" }
);

module.exports = Sabor;
