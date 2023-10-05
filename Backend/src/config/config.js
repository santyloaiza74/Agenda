require ('dotenv').config()

const Config={
    env: process.env.NODE_ENV || 'dev',
    port: process.env.APP_PORT,
    dbHost: process.env.DB_HOST,
    dbUort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME
}
module.exports= Config