require('dotenv').config();
const { db } = process.env
module.exports.config = {
    uri: db,
    options: {
        dbName: 'To-Do',
        useNewUrlParser: true
    },
}