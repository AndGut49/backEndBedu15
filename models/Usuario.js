/*GENERACION DEL MODELO DE USUARIO USANDO SEQUELIZE*/

// importamos por separado los métodos de Sequelize y los tipos de dato.
// const { Sequelize, DataTypes } = require("sequelize");
// // importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
// const sequelize = new Sequelize("mysql::memory:");
const { DataTypes } = require("sequelize");
const db = require("../config/db");
//creamos el modelo para usuario
const Usuario = db.sequelize.define(
    "usuario",
    {
        id: {
            // se indica el tipo de dato de la columna.
            type: DataTypes.INTEGER,
            // indicamos que este campo es llave primaria
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            // indicamos que el campo no admite valores null
            allowNull: false,
        },
        nombre: DataTypes.STRING,
        apellidoPaterno: DataTypes.STRING,
        apellidoMaterno: DataTypes.STRING,
        foto: DataTypes.STRING,
        edad: DataTypes.INTEGER,
        sexo: DataTypes.STRING,
        ubicacion: DataTypes.STRING,
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

// exportamos el modelo.
module.exports = Usuario;
