const Sequelize = require('sequelize');

const db = new Sequelize('postgres://sszaweza:hSOissp87Uhd1YMyI4Nd8c_JqqYgzwY4@elmer.db.elephantsql.com:5432/sszaweza');

db.authenticate()
  .then(() => console.log('Connected to the Database!'))
  .catch(err => console.log('ERROR WITH DATABASE CONNECTION!'))

module.exports = db;  