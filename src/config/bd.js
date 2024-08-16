const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('projeto_aluno', 'Helenis', 'etsps2024401',
{
dialect: 'mssql', host:'localhost', port: 1433
});
database.sync();
module.exports = database;