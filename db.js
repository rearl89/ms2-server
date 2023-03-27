const Pool = require('pg').Pool
const dotenv = require('dotenv')

dotenv.config()

//Enables querying Postgres
const pool = new Pool({
    user: "postgres",
    password: process.env.DB_PASS,
    host: "localhost",
    port: 5432,
    database: "perntodo"
})

module.exports = pool