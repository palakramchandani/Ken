
const  Sequelize  = require("sequelize");
const dbConnection = require("../Utils/dbConnection");
const users= dbConnection.define('User',{
    name: {
        type: Sequelize.STRING,
        
    },
    mobileNumber:{

    type: Sequelize.STRING,
    allowNull:false,
    unique:true
},
password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birth: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  gender:{
    type: Sequelize.ENUM('Male','Female',"others"),
    allowNull:false,
  }
})
module.exports = users;