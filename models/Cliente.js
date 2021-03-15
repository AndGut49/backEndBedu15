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
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            AUTO_INCREMENT: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellidoPaterno: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellidoMaterno: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
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
