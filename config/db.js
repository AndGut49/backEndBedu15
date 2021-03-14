const Sequelize = require('sequelize')
const db={}
// const sequelize = new Sequelize('bblogif0k0vyx43gn7fa', 'uyqqcpnqsbqyckvy', 'pz1ksNHR6av6pALxg2iL', {
//     host: 'bblogif0k0vyx43gn7fa-mysql.services.clever-cloud.com',
//     // una de estas opciones dependiendo el gestor de la base
//     dialect: 'mysql',
//     operatorAliases: false,
//       pool:{
//           max: 5,
//           min: 0,
//           acquire: 30000,
//           idle: 10000
//       }
//   })
//process.env.NODE_ENV
  // const sequelize = new Sequelize('tiendapostres', 'root', 'santos..', {
  //   host: 'localhost',
  //   // una de estas opciones dependiendo el gestor de la base
  //   dialect: 'mysql',
  //   operatorAliases: false,
  //     pool:{
  //         max: 5,
  //         min: 0,
  //         acquire: 30000,
  //         idle: 10000
  //     }
  // })
  const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    // una de estas opciones dependiendo el gestor de la base
    dialect: 'mysql',
    operatorAliases: false,
      pool:{
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
      }
  })
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db 