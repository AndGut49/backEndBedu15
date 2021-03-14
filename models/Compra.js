// // importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
// const sequelize = new Sequelize('mysql::memory:');
const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Cliente = require("../models/Cliente");
const Postre = require("../models/Postre");

const Compra = db.sequelize.define(
    "compra",
    {
        idCompra: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            AUTO_INCREMENT: true,
        },
        idCliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Cliente, key: "idCliente" },
        },
        idPostre: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Postre, key: "idPostre" },
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        formaPago: {
            type: DataTypes.INTEGER,
        },
        fechaPago: {
            type: DataTypes.DATE,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "compra",
    }
);
Compra.belongsTo(Cliente, {
    foreignKey: "idCliente",
});
Compra.belongsTo(Postre, {
    foreignKey: "idPostre",
});

module.exports = Compra;
