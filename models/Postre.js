const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Sabor = require("../models/Sabor");
const Tamanio = require("../models/Tamanio");
const Categoria = require("../models/Categoria");


const Postre = db.sequelize.define(
    "postre",
    {
        idPostre: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            AUTO_INCREMENT: true,
        },
        idSabor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Sabor, key: "idSabor" },
        },
        idTamanio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Tamanio, key: "idTamanio" },
        },
        idCategoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Categoria, key: "idCategoria" },
        },
        nombre: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "postre",
    }
);
Postre.belongsTo(Sabor, {
    foreignKey: "idSabor",
});
Postre.belongsTo(Tamanio, {
    foreignKey: "idTamanio",
});
Postre.belongsTo(Categoria, {
    foreignKey: "idCategoria",
});

module.exports = Postre;
