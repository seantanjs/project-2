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

    let addGoalData = (data, loggedInUserId, callback) => {
        let userId = loggedInUserId
        let targetAmount = data.target_amount;
        let timeHorizon = data.time_horizon;

        let startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        console.log("THE STARTDATE IS HERE",startDate);

        let endDate = new Date(startDate.getFullYear(), startDate.getMonth() + parseInt(timeHorizon), startDate.getDate());
        if(endDate.getMonth() > 12) {
            let endDate = new Date(endDate.getFullYear() + 1, endDate.getMonth() - 12, endDate.getDate());
        }
        console.log("THE FUTURE IS HERE",endDate);

        let queryString = "UPDATE users SET target_amount=$1, time_horizon=$2, start_date=$3, end_date=$4 WHERE id=$5";

        let values = [targetAmount, timeHorizon, startDate, endDate, userId];

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
        addNewUser,
        addGoalData
    };
};