/*GENERACION DEL MODELO DE Administrador USANDO SEQUELIZE*/

// importamos por separado los métodos de Sequelize y los tipos de dato.
const { Sequelize, DataTypes } = require('sequelize');
// importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
const sequelize = new Sequelize('mysql::memory:');

//creamos el modelo para administrador
const Administrador = sequelize.define('Administrador', {
    idUsuario: {
        // se indica el tipo de dato de la columna.
        type: DataTypes.INTEGER,
        // indicamos que este campo es llave primaria
        primaryKey: true,
        // indicamos que el campo no admite valores null
        allowNull: false,
        AUTO_INCREMENT:true
    },
    nombre: {
        type: DataTypes.STRING(30),
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    apellidoPaterno: { 
        type: DataTypes.String(20),
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    apellidoMaterno: {
        type: DataTypes.String(20),
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    foto: {
        type: DataTypes.String(200)
    },
    edad: {
        type: DataTypes.INTEGER
    },
    sexo:{
        type: DataTypes.CHAR
    },
    direccion: {
        type: DataTypes.CHAR
    },
    email: {
        type: DataTypes.String(100),
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    password: {
        type: DataTypes.String(11),
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    password: {
        type: DataTypes.String(10)
    }
    // le decimos a que tabla de nuestra base de datos corresponde.
}, { tableName: 'usuario' });

module.exports = Administrador;