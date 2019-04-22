const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const SALT = 'secretsauce'; // cannot change

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


/**
* ===========================================
* VIEW HOME PAGE
* ===========================================
*/

  let renderHomePage = (request, response) => {
        if(request.cookies['username'] !== null){

            const loggedInUser = request.cookies["username"];

            response.render('home', {
                response : response,
                username : loggedInUser
                });
        } else {
            response.status(500).send('Error');
        }

  };

///////////////////////////////////////////////////////

/**
* ===========================================
* GET STARTED - INITIALIZE TARGET GOAL, TIME HORIZON, INITIAL FINANCES
* ===========================================
*/

//GET STARTED: app.get('/goal')
  let renderGoalForm = (request, response) => {

    if(request.cookies['username'] !== null){

            const loggedInUser = request.cookies["username"];

            response.render('goalForm', {
                username : loggedInUser
                });
        } else {
            response.status(500).send('Error');
        }
  };

//GET STARTED: app.post('/goal')
  let addUserFinances = (request, response) => {
    console.log(request.body);

    if(request.cookies['username'] !== null && request.cookies['userId'] !== null) {
            const loggedInUserName = request.cookies["username"];
            const loggedInUserId = request.cookies["userId"];
            console.log("HERE Login ID",loggedInUserId);

    db.finances.addNewFinanceData(request.body, loggedInUserId, (err, result) => {
        if(err !== null) {
            console.log("query error test 3");
            response.status(500).send("Error");
        } else if(result !== null) {
            db.users.addGoalData(request.body, loggedInUserId, (err, result) => {
                if(err !== null) {
                    console.log("query error test 4");
                    response.status(500).send("Error");
                } else if(result !== null) {
                    // response.send("success!");
                    // response.cookie('getStarted', true);
                    response.redirect("goal-tracking");
                }
            })
        }
    })


    } else {
            response.status(500).send('Error');
        }

  }

//////////////////////////////////////////////////////////

/**
* ===========================================
* ADD FINANCIAL DATA (MONTHLY DATA)
* ===========================================
*/


//SUBMIT THIS MONTH'S ENTRY: app.get('/monthly_input')
  let renderMonthlyFinancesForm = (request, response) => {

    if(request.cookies['username'] !== null){

            const loggedInUser = request.cookies["username"];

            response.render('monthlyFinancesForm', {
                username : loggedInUser
                });
        } else {
            response.status(500).send('Error');
        }
  };


//SUBMIT THIS MONTH'S ENTRY: app.post('/monthly_input')
  let addUserMonthlyFinances = (request, response) => {
    console.log(request.body);

    if(request.cookies['username'] !== null && request.cookies['userId'] !== null) {
            const loggedInUserName = request.cookies["username"];
            const loggedInUserId = request.cookies["userId"];
            console.log("HERE Login ID",loggedInUserId);

    db.finances.addNewFinanceData(request.body, loggedInUserId, (err, result) => {
        if(err !== null) {
            console.log("query error test 3");
            response.status(500).send("Error");
        } else if(result !== null) {
            response.redirect("goal-tracking");
        }
    })


    } else {
            response.status(500).send('Error');
        }

  }


/////////////////////////////////////////////////////////


/**
* ===========================================
* VIEW TRANSACTIONS
* ===========================================
*/

//CLICK ON "TRANSACTIONS" LINK: app.get('/transactions')
  let renderSavingsTransactions = (request, response) => {

    if(request.cookies['username'] !== null && request.cookies['userId'] !== null){

            const loggedInUserName = request.cookies["username"];

            const loggedInUserId = request.cookies["userId"];

           db.finances.getFinanceAndUserData(loggedInUserId, (err, result) => {
            if(err !== null) {
                console.log("query error test 4");
                response.status(500).send("Error");
            } else if(result !== null) {
                // response.cookie()
                // response.render('goalTracking', {
                // username : loggedInUser
                // });
                // console.log(result.rows);
                const data = { dataSet: result.rows ,
                               username: loggedInUserName };
                // response.send("hello");
                response.render("transactions", data );
            }
        });

        } else {
            response.status(500).send('Error');
        }
  };

/////////////////////////////////////////////////////////

/**
* ===========================================
* VIEW GOAL TRACKING
* ===========================================
*/

//CLICK ON "GOAL TRACKING" LINK: app.get('/goal-tracking')
  let renderGoalTracking = (request, response) => {

    if(request.cookies['username'] !== null && request.cookies['userId'] !== null){

            const loggedInUserName = request.cookies["username"];

            const loggedInUserId = request.cookies["userId"];

           db.finances.getFinanceData(loggedInUserId, (err, result) => {
            if(err !== null) {
                console.log("query error test 4");
                response.status(500).send("Error");
            } else if(result !== null) {
                // response.cookie()
                // response.render('goalTracking', {
                // username : loggedInUser
                // });
                // console.log(result.rows);
                const data = { dataSet: result.rows ,
                               username: loggedInUserName };
                // response.send("hello");
                response.render("goalTracking", data );
            }
        });

        } else {
            response.status(500).send('Error');
        }
  };

/////////////////////////////////////////////////////////

/**
* ===========================================
* VIEW SAVINGS TRACKING
* ===========================================
*/

//CLICK ON "SAVINGS TRACKING" LINK: app.get('/savings-tracking')
  let renderSavingsTracking = (request, response) => {

    if(request.cookies['username'] !== null && request.cookies['userId'] !== null){

            const loggedInUserName = request.cookies["username"];

            const loggedInUserId = request.cookies["userId"];

           db.finances.getFinanceData(loggedInUserId, (err, result) => {
            if(err !== null) {
                console.log("query error test 5");
                response.status(500).send("Error");
            } else if(result !== null) {
                // response.cookie()
                // response.render('goalTracking', {
                // username : loggedInUser
                // });
                // console.log(result.rows);
                const data = { dataSet: result.rows ,
                               username: loggedInUserName };
                // response.send("hello");
                response.render("savingsTracking", data );
            }
        });

        } else {
            response.status(500).send('Error');
        }
  };

/////////////////////////////////////////////////////////


/**
* ===========================================
* VIEW FINANCIAL OVERVIEW
* ===========================================
*/

//CLICK ON "FINANCIAL OVERVIEW" LINK: app.get('/overview')
  let renderFinanceOverview = (request, response) => {

    if(request.cookies['username'] !== null && request.cookies['userId'] !== null){

            const loggedInUserName = request.cookies["username"];

            const loggedInUserId = request.cookies["userId"];

           db.finances.getFinanceData(loggedInUserId, (err, result) => {
            if(err !== null) {
                console.log("query error test 6");
                response.status(500).send("Error");
            } else if(result !== null) {
                // response.cookie()
                // response.render('goalTracking', {
                // username : loggedInUser
                // });
                // console.log(result.rows);
                const data = { dataSet: result.rows ,
                               username: loggedInUserName };
                // response.send("hello");
                response.render("financeOverview", data );
            }
        });

        } else {
            response.status(500).send('Error');
        }
  };

/////////////////////////////////////////////////////////

/**
* ===========================================
* AJAX CALL
* ===========================================
*/


//HANDLER FOR AJAX CALL TO RENDER CHART.JS: app.get('/fetch_finance_data')
  let obtainDataForChart = (request, response) => {

    if(request.cookies['username'] !== null && request.cookies['userId'] !== null){

            const loggedInUserName = request.cookies["username"];

            const loggedInUserId = request.cookies["userId"];

           db.finances.getFinanceAndUserData(loggedInUserId, (err, result) => {
            if(err !== null) {
                console.log("query error test 7");
                response.status(500).send("Error");
            } else if(result !== null) {

                console.log("RESULT RESULT", result.rows);

                const data = { "res": result.rows };
                response.send(data);
            }
        });

        } else {
            response.status(500).send('Error');
        }
  };


/////////////////////////////////////////////////////////


/**
* ===========================================
* DELETE
* ===========================================
*/


//CLICK ON "TRANSACTIONS" LINK & CLICK ON "DELETE": app.delete('/transactions/:txnDate')
  let deleteOneTransaction = (request, response) => {

    if(request.cookies['username'] !== null && request.cookies['userId'] !== null){

            const loggedInUserName = request.cookies["username"];

            const loggedInUserId = request.cookies["userId"];

            const txnDateToBeDeleted = request.params.txnDate;
            console.log(txnDateToBeDeleted);


           db.finances.deleteOneTxn(txnDateToBeDeleted, (err, result) => {
            if(err !== null) {
                console.log("query error test 8");
                response.status(500).send("Error");
            } else if(result !== null) {

                console.log("RESULT RESULT", result.rows);

                response.send("Transaction has been deleted!" + "<br><br><a href='/transactions'>Back to transactions</a>" );
            }
        });

        } else {
            response.status(500).send('Error');
        }
  };

///////////////////////////////////////////////////////

/**
* ===========================================
* EDIT
* ===========================================
*/

//CLICK ON "TRANSACTIONS" LINK & CLICK ON "EDIT": app.get('/transactions/:txnDate/edit')
  let renderEditForm = (request, response) => {

    if(request.cookies['username'] !== null && request.cookies['userId'] !== null){

            const loggedInUserName = request.cookies["username"];

            const loggedInUserId = request.cookies["userId"];

            const txnDateToBeEdited = request.params.txnDate;
            console.log(txnDateToBeEdited);

           db.finances.getTransactionDateForEdit(txnDateToBeEdited, (err, result) => {
            if(err !== null) {
                console.log("query error test 9");
                response.status(500).send("Error");
            } else if(result !== null) {

                console.log("RESULT RESULT", result.rows);

                const data = { res: result.rows,
                                username: loggedInUserName,
                                txnDate: txnDateToBeEdited };
                response.render("editForm", data);
            }
        });

        } else {
            response.status(500).send('Error');
        }
  };


//CLICK ON "TRANSACTIONS" LINK & CLICK ON "EDIT" & MADE CHANGES & CLICK ON "CONFIRM": app.put('/transactions/:txnDate')
let editOneTransaction = (request, response) => {

    if(request.cookies['username'] !== null && request.cookies['userId'] !== null){

            const loggedInUserName = request.cookies["username"];

            const loggedInUserId = request.cookies["userId"];

            const txnDateToBeEdited = request.params.txnDate;

            const changeObj = request.body;

           db.finances.editOneTxn(changeObj, txnDateToBeEdited, (err, result) => {
            if(err !== null) {
                console.log("query error test 10");
                response.status(500).send("Error");
            } else if(result !== null) {

                console.log("RESULT RESULT", result.rows);

                response.send("Transaction has been edited!" + "<br><br><a href='/transactions'>Back to transactions</a>" );
            }
        });

        } else {
            response.status(500).send('Error');
        }
  };

/////////////////////////////////////////////////////////

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    renderHome: renderHomePage,
    renderGoal: renderGoalForm,
    addNewFinances : addUserFinances,
    renderMonthlyFinances: renderMonthlyFinancesForm,
    addMonthlyFinances : addUserMonthlyFinances,
    renderTransactions: renderSavingsTransactions,
    deleteTransaction: deleteOneTransaction,
    renderEdit: renderEditForm,
    editTransaction: editOneTransaction,
    renderGoalTracking: renderGoalTracking,
    renderSavingsTracking: renderSavingsTracking,
    renderOverview: renderFinanceOverview,
    obtainChartData: obtainDataForChart
  };

}