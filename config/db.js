const Sequelize = require('sequelize')
const db={}
const sequelize = new Sequelize('bblogif0k0vyx43gn7fa', 'uyqqcpnqsbqyckvy', 'pz1ksNHR6av6pALxg2iL', {
    host: 'bblogif0k0vyx43gn7fa-mysql.services.clever-cloud.com',
    // una de estas opciones dependiendo el gestor de la base
    dialect: 'mysql',
    operatorAliases: false,
      pool:{
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
      },
      quoteIdentifiers: false
  })
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db 