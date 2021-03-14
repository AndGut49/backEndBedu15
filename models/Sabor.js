const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Sabor = db.sequelize.define(
    "sabor",
    {
        idSabor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            AUTO_INCREMENT: true,
        },
        nombreSabor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "sabor",
    }
);

module.exports = Sabor;
