const env = process.env

const config = {
  "development": {
    "username": env.DB_USER,
    "password": env.DB_PASS,
    "database": env.DB_DATABASE,
    "host": env.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": env.DB_USER,
    "password": env.DB_PASS,
    "database": env.DB_DATABASE,
    "host": env.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": env.DB_USER,
    "password": env.DB_PASS,
    "database": env.DB_DATABASE,
    "host": env.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  }
}

module.exports = {
  config
}
