module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_DATABASE_NAME,
  dialect: "mysql",
  pool: {                   //pool used for sequelize connection pool configurartion
    max: 5,                 //maximum connection number in pool
    min: 0,                 //minimum connection number in pool
    acquire: 30000,         //that pool will try to get connection before throwing error
    idle: 1000              //in ms,  connection can be idle before being released
  }
}