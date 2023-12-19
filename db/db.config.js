const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const HOST = process.env.HOST;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;


const sequelize = new Sequelize({
    dialect: 'postgres',
    host: HOST, 
    username: 'yoga_db_xvkr_user', 
    password: '3PfkyeoReDLkbpbuN6BXRyxqNKWE46oy', 
    database: DATABASE, 
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, 
      },
  }
});

module.exports = sequelize;