require('dotenv').config();

function getEnv(varibale) {
  const value = process.env[varibale];
  if (typeof value === 'undefined') {
    console.warn(`Seems like the variable "${varibale}" is not set in the environment. 
    Did you forget to execute "cp .env.sample .env" and adjust variables in the .env file to match your own environment ?`);
  }
  return value;
}

const inProdEnv = getEnv('NODE_ENV') === 'production';
const inDevEnv = getEnv('NODE_ENV') === 'dev';
const inTestEnv = getEnv('NODE_ENV') === 'test';

const SERVER_PORT = getEnv(`SERVER_PORT${inTestEnv ? '_TEST' : ''}`);

const DB_HOST = getEnv(`DB_HOST${inTestEnv ? '_TEST' : ''}`);
const DB_PORT = getEnv(`DB_PORT${inTestEnv ? '_TEST' : ''}`);
const DB_USER = getEnv(`DB_USER${inTestEnv ? '_TEST' : ''}`);
const DB_PASS = getEnv(`DB_PASS${inTestEnv ? '_TEST' : ''}`);
const DB_NAME = getEnv(`DB_NAME${inTestEnv ? '_TEST' : ''}`);
const SESSION_COOKIE_NAME = getEnv(
  `SESSION_COOKIE_NAME${inTestEnv ? '_TEST' : ''}`
);
const SESSION_COOKIE_SECRET = getEnv(
  `SESSION_COOKIE_SECRET${inTestEnv ? '_TEST' : ''}`
);
const CORS_ALLOWED_ORIGINS = getEnv(
  `CORS_ALLOWED_ORIGINS${inTestEnv ? '_TEST' : ''}`
);

module.exports = {
  getEnv,
  inTestEnv,
  inProdEnv,
  inDevEnv,
  SERVER_PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_NAME,
  DB_PASS,
  CORS_ALLOWED_ORIGINS,
  SESSION_COOKIE_NAME,
  SESSION_COOKIE_SECRET,
};
