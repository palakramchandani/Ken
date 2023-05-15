
const sequelize = require("sequelize");
const dbConnection = require("../Utils/dbConnection");

// Define UserVehicle model
const UserVehicle = dbConnection.define('UserVehicle', {
    vehicleNumber: {
      type: sequelize.STRING,
      allowNull: false,
      
    }
  });
  module.exports = UserVehicle;
