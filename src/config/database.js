require('dotenv').config()

module.exports = {
  username: process.env.DB_USER || 'admin',
  password: process.env.DB_PASS || 'admin123!',
  database: process.env.DB_NAME || 'db_example',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  dialect: process.env.DB_CONNECTION || 'postgres',
}