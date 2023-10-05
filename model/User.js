const {Sequelize  ,DataTypes, INTEGER, STRING, TEXT } = require('sequelize');
const databaseUri = 'postgres://postgres:G@ll@gher@localhost:5432/postgres'

const sequelize = new Sequelize(databaseUri, {
    dialect: 'postgres',
    // pool: {
    //     max: 3,
    //     min: 0,
    //     acquire: 3000,
    //     idle: 1000
    // },
    logging:true,
    
});
const UserRecord = sequelize.define('Users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
   name: {
        type: STRING,
        allowNull: false,
    },
    email:{
        type:TEXT,
        allowNull:false
    },
    password:{
        type:STRING,
        allowNull:false,
        validate: {
            len: [8, Infinity], // Minimum length of 8 characters
          },
    }
}, {
    freezeTableName: true
});
UserRecord.sync()
module.exports = UserRecord;