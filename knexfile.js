require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/hallOfRecall'  
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL

  }

};
