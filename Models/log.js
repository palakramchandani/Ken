
const  sequelize  = require("sequelize");
const dbConnection = require("../Utils/dbConnection");

//Define Log model
const Log = dbConnection.define('Log', {
    // checkInTime: {
    //   type: DataTypes.Date,
    // },
    // checkOutTime: {
    //   type: DataTypes.Date,
    // },
    // duration: {
    //   type: DataTypes.STRING,
    // }

    checkInTime : sequelize.DATE,
    checkOutTime : sequelize.DATE,
    duration : sequelize.STRING,
  });
  module.exports = Log;