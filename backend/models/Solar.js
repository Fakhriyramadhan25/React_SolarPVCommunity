const sequelize = require('./config.js');
const db = require('./config.js');
const { Sequelize } = require('sequelize');

const Solar = db.define('solarData', {
    id: {
        type: Sequelize.STRING,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    lat: {
        type: Sequelize.INTEGER,
    },
    long: { 
        type: Sequelize.INTEGER,
    },
    area: {
        type: Sequelize.INTEGER,
    }
})