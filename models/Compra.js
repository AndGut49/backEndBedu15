/*GENERACION DEL MODELO DE Compra USANDO SEQUELIZE*/

// importamos por separado los métodos de Sequelize y los tipos de dato.
const { Sequelize, DataTypes } = require('sequelize');
// importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
const sequelize = new Sequelize('mysql::memory:');

// importamos la clases para hacer la relacion de las llaves foraneas
const Cliente = require('../models/Cliente');
const Postre = require('../models/Postre');

/** Clase que representa una solicitud de compra de postres */
const Compra = sequelize.define('Compra', {
    idCompra: {
        // se indica el tipo de dato de la columna.
        type: DataTypes.INTEGER,
        // indicamos que este campo es llave primaria
        primaryKey: true,
        // indicamos que el campo no admite valores null
        allowNull: false,
        AUTO_INCREMENT:true
    },
    idCliente: {
        type: DataTypes.INTEGER,
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    idPostre: {
        type: DataTypes.INTEGER,
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    formaPago: {
        type: DataTypes.INT
    },
    fechaPago: {
        type: DataTypes.DATE
    }
    // le decimos a que tabla de nuestra base de datos corresponde.
}, { tableName: 'compra' });

//Relacion una compra puede tener diferentes postres, un postre puede estar en diferentes compras
Compra.belongsToMany(Postre, { as: 'Postres', through: 'postre_compra', foreignKey: 'idCompra' })
Postre.belongsToMany(Compra, { as: 'Carritos', through: 'postre_compra', foreignKey: 'idPostre' })

//Relacion un cliente tiene un carrito de compra, y un carrito de compra le pertenece a un cliente
Compra.hasOne(Cliente, { as: 'Compras', foreignKey: 'idCliente'})

module.exports = Compra;
