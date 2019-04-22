const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const SALT = 'secretsauce'; // cannot change

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


  let renderRegisterForm = (request, response) => {
        response.render('register');
  };


  let registerUser = (request, response) => {

    const username = request.body.username;
    const hash = sha256(request.body.password + SALT);

    db.users.addNewUser( request.body, (err, result) => {
        if(err !== null) {
            console.log("query error test 1");
            response.status(500).send('Error');
        } else {
            response.send('User account successfully registered!<br/><a href="/login">Login here </a>');
        }
    });
  };

  let renderLoginForm = (request, response) => {
        response.render('login');
  };


  let loginUser = (request, response) => {

    const username = request.body.username;
    const hash = sha256(request.body.password + SALT);

    db.users.authenticateUser( request.body, (err, result) => {
                if(err !== null) {
                    console.log("query error test 2");
                    response.status(500).send('Error');
                } else if(result !== null) {
                    const logInHash = sha256(username + SALT);

                    response.cookie('username', username);
                    response.cookie('userId', result.rows[0].id);
                    response.cookie('logIn', logInHash);


                    response.redirect('home');
                } else if(err === null && result === null) {
                    response.render("loginFail");
                }

    });
  };

  let logoutUser = (request, response) => {
        response.clearCookie('username', request.cookies['username']);
        response.clearCookie('userId', request.cookies['userId']);
        response.redirect('login');
  };



  let renderAboutUsPage = (request, response) => {
         if(request.cookies['username'] !== null){

            const loggedInUser = request.cookies["username"];

            response.render('aboutUs', { username : loggedInUser });
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
    renderRegister: renderRegisterForm,
    registerNewUser: registerUser,
    renderLogin: renderLoginForm,
    loginUser: loginUser,
    logoutUser: logoutUser,
    renderAboutUs: renderAboutUsPage
  };

}