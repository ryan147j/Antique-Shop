const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('antique', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
// Authenticate and sync database
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Database connection established.');
//     await sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate tables
//     console.log('All models were synchronized successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();