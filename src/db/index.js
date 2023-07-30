const pgp = require('pg-promise')();
const connectionString = "postgresql://postgres:1@localhost:5432/nodesqlapplication1june132023";

const db = pgp(connectionString);

module.exports = db;