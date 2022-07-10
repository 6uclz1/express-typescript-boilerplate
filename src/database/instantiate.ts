import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  process.env.DB_NAME || 'db_example',
  process.env.DB_USER || 'admin',
  process.env.DB_PASS || 'admin123!',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    dialectOptions: {
      encrypt: true
    },
    port: Number(process.env.DB_PORT) || 5432,
    logging: false,
    pool: {
        max: Number(process.env.MAX_POOL) || 10,
        min: Number(process.env.MIN_POOL) || 1,
        acquire: 30000,
        idle: 10000
    }
  }
)

const db = {
  sequelize,
  Sequelize,
}

export default db