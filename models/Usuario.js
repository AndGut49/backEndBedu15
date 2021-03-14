/*GENERACION DEL MODELO DE USUARIO USANDO SEQUELIZE*/

// importamos por separado los métodos de Sequelize y los tipos de dato.
// const { Sequelize, DataTypes } = require("sequelize");
// // importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
// const sequelize = new Sequelize("mysql::memory:");
const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Usuario = db.sequelize.define(
    "usuario",
    {
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nombre: DataTypes.STRING,
        apellidoPaterno: DataTypes.STRING,
        apellidoMaterno: DataTypes.STRING,
        foto: DataTypes.STRING,
        edad: DataTypes.INTEGER,
        sexo: DataTypes.STRING,
        direccion: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        telefono: DataTypes.STRING,
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "usuario",
    }
);

module.exports = Usuario;
