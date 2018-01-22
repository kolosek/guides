const dotenv = require('dotenv').config();

module.exports = {
  development: {
    database: process.env.DB_NAME_DEVELOPMENT,
    username: process.env.DB_USERNAME_DEVELOPMENT,
    password: process.env.DB_PASSWORD_DEVELOPMENT,
    host: process.env.DB_HOST_DEVELOPMENT,
    port: process.env.DB_PORT_DEVELOPMENT,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: 'password',
    database: 'ghost-blog-test',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  },
};
