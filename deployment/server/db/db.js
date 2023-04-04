const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: ''//add file path to the db here
    },
    useNullAsDefault: true
});

module.exports = db;