const dbConfig = require('./config.json').development;

const Sequelize = new require('sequelize');
const connString = `${dbConfig.dialect}://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:3306/${dbConfig.database}`;
const connSequelize = new Sequelize(connString);

module.exports = connSequelize;