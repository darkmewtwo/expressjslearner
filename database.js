// const { Client } = require('pg');

// const client = new Client({
//   host: 'hostname',
//   port: 5432,
//   user: 'username',
//   password: 'password',
//   database: 'database_name'
// });

// client.connect()
//   .then(() => console.log('Connected to PostgreSQL'))
//   .catch(err => console.error('Connection error', err.stack));



const pgp = require('pg-promise')();

const connection = {
  host: 'psql',
  port: 5432,
  user: 'root',
  password: 'passwd',
  database: 'mytestdb'
};


const db_connection = pgp(connection);
module.exports = {db_connection: db_connection, connection: connection};
// db.connect()
//   .then(() => console.log('Connected to PostgreSQL'))
//   .catch(err => console.error('Connection error', err));