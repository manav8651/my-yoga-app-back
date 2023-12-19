const sequelize = require('../db/db.config');
const { DataTypes } = require('sequelize');
const Person = require('./Person');
const YogaBatch = require('./YogaBatch');

const Enrollment = sequelize.define('Enrollment', {
    enrollment_date: {
        type: DataTypes.STRING,
    },
});

Enrollment.belongsTo(Person);
Enrollment.belongsTo(YogaBatch);
  
sequelize.sync()
    .then(() => {
      console.log('Database and tables synced.');
    })
    .catch((error) => {
      console.error('Error syncing database:', error);
});

module.exports = Enrollment;