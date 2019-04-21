/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

module.exports = (dbPoolInstance) => {

    let addNewFinanceData = (data, loggedInUserId, callback) => {
        console.log("DATA IS HERE LA", data);
        let transactionDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        let monthlyIncome = data.monthly_income_amount;
        let monthlyExpenses = data.monthly_expenses_amount;
        let monthlyInvestment = data.monthly_investment_amount;
        let monthlySaving = data.monthly_saving_amount;
        let noOfYears = parseInt(data.time_horizon);
        let userId = loggedInUserId;


        const queryString = "INSERT INTO finances (transaction_date, monthly_income_amount, monthly_expenses_amount, monthly_investment_amount, monthly_saving_amount, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";

        const values = [transactionDate, monthlyIncome, monthlyExpenses, monthlyInvestment, monthlySaving, userId];

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



    let getFinanceData = (loggedInUserId, callback) => {

        let userId = loggedInUserId;
        // console.log("USERID IS:", userId);

        const queryString = "SELECT * FROM finances WHERE user_id = $1";


        const values = [userId];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                callback(error,null);
            } else {
                if(queryResult.rows.length !== 0) {
                    callback(null, queryResult);
                } else {
                    callback(null,null);
                }
            }
        });
    }



    let getFinanceAndUserData = (loggedInUserId, callback) => {

        let userId = loggedInUserId;
        // console.log("USERID IS:", userId);

        const queryString = "SELECT * from users INNER JOIN finances ON (users.id = finances.user_id) WHERE user_id = $1";


        const values = [userId];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                callback(error,null);
            } else {
                if(queryResult.rows.length !== 0) {
                    callback(null, queryResult);
                } else {
                    callback(null,null);
                }
            }
        });
    }



    return {
        addNewFinanceData,
        getFinanceData,
        getFinanceAndUserData
    };
};