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

//usersControlCallbacks is a callback function within the controller file
  app.get('/register', usersControllerCallbacks.renderRegister);

  app.post('/register', usersControllerCallbacks.registerNewUser);

   app.get('/login', usersControllerCallbacks.renderLogin);

    app.post('/login', usersControllerCallbacks.loginUser);
};