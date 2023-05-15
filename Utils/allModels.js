const PATH ="../Models";

const models={
 log_model : require(PATH +'/log.js'),
 parkingSpot_model:require(PATH+'/parkingSpot.js'),
 userVehicle_model : require(PATH + '/userVehicle.js'),
 user :require(PATH + '/users.js'),
}

module.exports = models