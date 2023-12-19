const sequelize = require('../db/db.config');
const { DataTypes } = require('sequelize');

const YogaBatch = sequelize.define('YogaBatch', {
    batch_name: {
        type: DataTypes.STRING,
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

module.exports = YogaBatch;