const Sequelize=require('sequelize');

const DB_PASSWORD_=""
const DB_USER_NAME="root"
const DATABASE_NAME="project1"

const dbConnection=new Sequelize(DATABASE_NAME,DB_USER_NAME,DB_PASSWORD_,{
    host:process.env.DB_HOST||'localhost',
    port:process.env.DB_PORT || 3306,
    dialect: "mysql",
    logging:false,
});

const authenticateDbConnection = async () => {
    try{
        await dbConnection.authenticate();
        console.log("Connection established");
    }catch(error){
        console.log("Unable to connect",error);
    }
}

authenticateDbConnection();
module.exports = dbConnection
