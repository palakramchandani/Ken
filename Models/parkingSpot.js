
const Sequelize= require("sequelize");
const dbConnection = require("../Utils/dbConnection");

// Define ParkingSpot model
  const ParkingSpot = dbConnection.define('ParkingSpot', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    code: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });
  module.exports = ParkingSpot;