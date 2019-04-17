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
    response.send("HERE LA CB");
  };


  // let renderGoalForm = (request, response) => {

  // };




  // let registerUser = (request, response) => {

  //   const username = request.body.username;
  //   const hash = sha256(request.body.password + SALT);

  //   db.users.addNewUser( request.body, (err, result) => {
  //       if(err !== null) {
  //           console.log("query error test 1");
  //           response.status(500).send('Error');
  //       } else {
  //           response.send('User account successfully registered!<br/><a href="/login">Login here </a>');
  //       }
  //   });
  // };

  // let renderLoginForm = (request, response) => {
  //       response.render('login');
  // };


  // let loginUser = (request, response) => {

  //   const username = request.body.username;
  //   const hash = sha256(request.body.password + SALT);

  //   db.users.authenticateUser( request.body, (err, result) => {
  //               if(err !== null) {
  //                   console.log("query error test 2");
  //                   response.status(500).send('Error');
  //               } else if(result !== null) {
  //                   const logInHash = sha256(username + SALT);

  //                   response.cookie('username', username);
  //                   response.cookie('logIn', logInHash);
//
  //                   response.send("home page");
  //               } else if(err === null && result === null) {
  //                   response.render("loginFail");
  //               }

  //   });
  // };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    renderHome: renderHomePage,
    renderGoal: renderGoalForm,
    addFinances : addUserFinances
  };

}