/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const SALT = 'secretsauce'; // cannot change

module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let authenticateUser = (data, callback) => {

        const username = data.username;
        const hash = sha256(data.password + SALT);

        const queryString = "SELECT * FROM users WHERE username=$1 AND password=$2";

        const values = [username, hash];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                callback(error,null);
            } else {
                if(queryResult.rows.length === 1) {
                    callback(null, queryResult);
                } else {
                    callback(null,null);
                }
            }
        });
    };


    let addNewUser = (data, callback) => {

        const username = data.username;
        const hash = sha256(data.password + SALT);

        let queryString = "INSERT INTO users (username, password) VALUES ($1, $2)";

        let values = [username, hash];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                callback(error,null);
            } else {
                callback(null,queryResult);
            }
        });

    }

    return {
        authenticateUser,
        addNewUser
    };
};