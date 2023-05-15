const models=require("./allModels")
const dbConnection=require("./dbConnection")


// Define associations between models
const relationships = async() =>{
models.user.hasMany(models.userVehicle_model)
models.userVehicle_model.belongsTo(models.user)
models.user.hasMany(models.log_model);
models.log_model.belongsTo(models.user);
models.userVehicle_model.hasMany(models.log_model);
models.log_model.belongsTo(models.userVehicle_model);
models.parkingSpot_model.hasMany(models.log_model);
models.log_model.belongsTo(models.parkingSpot_model)

try{
    await dbConnection.sync();
    console.log("sync");
}catch (error){
    console.log(error);
}
}


dbConnection.sync();

module.exports = relationships();