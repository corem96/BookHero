/*jshint esversion: 6*/
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../', '.env')});

module.exports = {
  app: {
    port: process.env.DEV_APP_PORT || 3000,
    appName: process.env.APP_NAME || 'BookHero',
    env: process.env.NODE_ENV || 'development',
    api: { prefix: '/api' }
  },
  db: {
    dbUrl: process.env.MONGODB_URI,
    port: process.env.DB_PORT || 27017,
    // database: process.env.DB_NAME || 'bookhero',
    // password: process.env.DB_PASS || 'password',
    // username: process.env.DB_USER || 'username',
    // host: process.env.DB_HOST || '127.0.0.1',
    // dialect: 'mongo',
    // logging: true
  },
  // winiston: {
  //   logpath: '/bookhero/logs'
  // },
  auth: {
    jwt_secret: process.env.JWT_SECRET,
    jwt_expiresin: process.env.JWT_EXPIRESIN || '1d',
    saltRounds: process.env.SALT_ROUND || 10,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET || 'VmVyeVBvd2VyZnVsbFNlY3JldA==',
		refresh_token_expiresin: process.env.REFRESH_TOKEN_EXPIRES_IN || '2d', // 2 days
  },
  // sendgrid: {
	// 	api_key: process.env.SEND_GRID_API_KEY,
	// 	api_user: process.env.USERNAME,
	// 	from_email: process.env.FROM_EMAIL || 'alaa.mezian.mail@gmail.com',
	// },
};