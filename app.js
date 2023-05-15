const express = require('express');
const db = require('./Utils/dbConnection');
const { Sequelize } = require('sequelize');


const bodyParser = require('body-parser');

const User = require('./Models/User');
//Call allTableRelationship in app.js
require("./Utils/allTableRelationship")
const app = express();

// Middleware
app.use(bodyParser.json());



  

  // Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000.');
  });

module.exports = app;

