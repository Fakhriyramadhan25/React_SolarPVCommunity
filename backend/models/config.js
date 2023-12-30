const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Luang','postgres','12345',{
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    port: '5436',
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

module.exports = sequelize;