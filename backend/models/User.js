const db = require("./config.js");
const {Sequelize} = require('sequelize');


const User = db.define("userdata", {
    id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    }
    ,
    email: {
        type: Sequelize.STRING
    },
    password:{ 
        type: Sequelize.STRING
    },
    solarId:{
        type: Sequelize.UUID,
        foreginKey: true,
    },
    energyCommunityId:{
        type: Sequelize.UUID,
        foreginKey: true
    }
    
})


module.exports = User;