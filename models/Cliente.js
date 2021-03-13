/*GENERACION DEL MODELO DE Cliente USANDO SEQUELIZE*/

// // importamos por separado los métodos de Sequelize y los tipos de dato.
// const { Sequelize, DataTypes } = require('sequelize');
// // importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
// const sequelize = new Sequelize('mysql::memory:');
const { DataTypes } = require("sequelize");
const db = require("../config/db");

//creamos el modelo para cliente
const Cliente = db.sequelize.define(
    "cliente",
    {
        idCliente: {
            // se indica el tipo de dato de la columna.
            type: DataTypes.INTEGER,
            // indicamos que este campo es llave primaria
            primaryKey: true,
            // indicamos que el campo no admite valores null
            allowNull: false,
            AUTO_INCREMENT: true,
        },
        nombre: {
            type: DataTypes.STRING,
            // indicamos que el campo no admite valores null
            allowNull: false,
        },
        apellidoPaterno: {
            type: DataTypes.STRING,
            // indicamos que el campo no admite valores null
            allowNull: false,
        },
        apellidoMaterno: {
            type: DataTypes.STRING,
            // indicamos que el campo no admite valores null
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            // indicamos que el campo no admite valores null
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            // indicamos que el campo no admite valores null
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            // indicamos que el campo no admite valores null
            allowNull: false,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "cliente",
    }
);

module.exports = Cliente;
