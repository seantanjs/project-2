module.exports = (app, allModels) => {


  /*
   *  ================================= ========
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */


  // require the controller
  const usersControllerCallbacks = require('./controllers/usersController')(allModels);

  const financesControllerCallbacks = require('./controllers/financesController')(allModels);

//usersControlCallbacks is a callback function within the controller file
  app.get('/register', usersControllerCallbacks.renderRegister);

  app.post('/register', usersControllerCallbacks.registerNewUser);

   app.get('/login', usersControllerCallbacks.renderLogin);

    app.post('/login', usersControllerCallbacks.loginUser);


//financessControlCallbacks is a callback function within the controller file
    app.get('/home', financesControllerCallbacks.renderHome);

     app.get('/goal', financesControllerCallbacks.renderGoal);

      app.post('/goal', financesControllerCallbacks.addFinances);


};