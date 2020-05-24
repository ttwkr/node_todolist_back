require('dotenv').config()
const env = process.env


  const development =  {
    "username": env.DB_USER,
    "password": env.DB_PASS,
    "database": env.DB_DATABASE,
    "host": env.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  }
  const test =  {
    "username": env.DB_USER,
    "password": env.DB_PASS,
    "database": env.DB_DATABASE,
    "host": env.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  }

  const production =  {
    "username": env.DB_USER,
    "password": env.DB_PASS,
    "database": env.DB_DATABASE,
    "host": env.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  }


module.exports = {
  development,
  test,
  production
}
