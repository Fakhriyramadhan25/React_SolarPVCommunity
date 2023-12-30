const sequelize = require('../models/config');
const db = require('../models/config');
const {Sequelize} = require('sequelize');

const EnergyCommunity = db.define('EnergyCommunity',
{
    id: {
        type: Sequelize.UUID,
        allownull: false, 
    },
    power: {
        type: Sequelize.NUMBER
    },
    production: {
        type: Sequelize.NUMBER
    },
    consumption: {
        type: Sequelize.NUMBER
    },
    saving: {
        type: Sequelize.NUMBER
    },
    roi: {
        type: Sequelize.NUMBER
    },
    energysave: {
        type: Sequelize.NUMBER
    }
})