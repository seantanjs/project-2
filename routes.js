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


    app.get('/logout', usersControllerCallbacks.logoutUser);


    app.get('/about-us', usersControllerCallbacks.renderAboutUs);

//financessControlCallbacks is a callback function within the controller file
    app.get('/home', financesControllerCallbacks.renderHome);

     app.get('/goal', financesControllerCallbacks.renderGoal);

      app.post('/goal', financesControllerCallbacks.addNewFinances);


       app.get('/monthly_input', financesControllerCallbacks.renderMonthlyFinances);

      app.post('/monthly_input', financesControllerCallbacks.addMonthlyFinances);

       app.get('/transactions', financesControllerCallbacks.renderTransactions);

       app.delete('/transactions/:txnDate', financesControllerCallbacks.deleteTransaction);

        app.get('/transactions/:txnDate/edit', financesControllerCallbacks.renderEdit);

       app.put('/transactions/:txnDate', financesControllerCallbacks.editTransaction);

      app.get('/goal-tracking', financesControllerCallbacks.renderGoalTracking);

      app.get('/savings-tracking', financesControllerCallbacks.renderSavingsTracking);

      app.get('/overview', financesControllerCallbacks.renderOverview);


      app.get('/fetch_finance_data', financesControllerCallbacks.obtainChartData);


};