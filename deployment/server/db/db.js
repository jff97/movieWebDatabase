const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './db/movieV7.db'//add file path to the .db file here
    },
    useNullAsDefault: true
});

module.exports = db;