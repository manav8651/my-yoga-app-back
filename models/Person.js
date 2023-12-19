const sequelize = require('../db/db.config');
const { DataTypes } = require('sequelize');

const Person = sequelize.define('Person', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
});
  
sequelize.sync()
    .then(() => {
      console.log('Database and tables synced.');
    })
    .catch((error) => {
      console.error('Error syncing database:', error);
});

module.exports = Person;