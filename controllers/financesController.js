const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const SALT = 'secretsauce'; // cannot change

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
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
                    response.redirect("tracking");
                }
            })
        }
    })


    } else {
            response.status(500).send('Error');
        }



  }



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
            response.redirect("tracking");
        }
    })


    } else {
            response.status(500).send('Error');
        }



  }



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


  let obtainDataForChart = (request, response) => {

    if(request.cookies['username'] !== null && request.cookies['userId'] !== null){

            const loggedInUserName = request.cookies["username"];

            const loggedInUserId = request.cookies["userId"];

           db.finances.getFinanceAndUserData(loggedInUserId, (err, result) => {
            if(err !== null) {
                console.log("query error test 5");
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
    renderTracking: renderGoalTracking,
    obtainChartData: obtainDataForChart
  };

}