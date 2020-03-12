const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:1234/wikistack');

module.exports = {
  db
}
