/*GENERACION DEL MODELO DE USUARIO USANDO SEQUELIZE*/


// importamos por separado los métodos de Sequelize y los tipos de dato.
const { Sequelize, DataTypes } = require('sequelize');
// importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
const sequelize = new Sequelize('mysql::memory:');

//creamos el modelo para usuario
const Usuario = sequelize.define('Usuario', {
  id: {
    // se indica el tipo de dato de la columna.
    type: DataTypes.INTEGER,
    // indicamos que este campo es llave primaria
    primaryKey : true
  },
  username: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
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

  // le decimos a que tabla de nuestra base de datos corresponde.
},{ tableName: 'usuario'});

// exportamos el modelo.
module.exports = Usuario;