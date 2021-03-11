/*GENERACION DEL MODELO DE Cliente USANDO SEQUELIZE*/

// importamos por separado los métodos de Sequelize y los tipos de dato.
const { Sequelize, DataTypes } = require('sequelize');
// importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
const sequelize = new Sequelize('mysql::memory:');

//creamos el modelo para cliente
const Cliente = sequelize.define('Cliente', {
    idCliente: {
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
        type: DataTypes.STRING(20),
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    apellidoMaterno: {
        type: DataTypes.STRING(20),
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(200),
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(5)
    },
    email: {
        type: DataTypes.STRING(100),
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(11),
        // indicamos que el campo no admite valores null
        allowNull: false
    }

    // le decimos a que tabla de nuestra base de datos corresponde.
}, { tableName: 'cliente' });

console.log(Cliente === sequelize.models.Cliente);

module.exports = Cliente;