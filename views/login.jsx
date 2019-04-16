var React = require('react');

class Login extends React.Component {
  render() {
    return (
        <html>
            <head>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/loginstyle.css"/>
                <title>Login Form</title>
            </head>
            <body>
                <h1>Login</h1>
                <br/>
                <div class="container">
            <form action="/login" method="POST">
                Username: <input class="form-control" name="username" /><br/>
                Password: <input type="password" class="form-control" name="password" /><br/>
                <input className="btn btn-primary" type="submit" value="Login"/>
            </form>
            <a href="/register">Register New Account</a>
            </div>
        </body>
    </html>
    );
  }
}

module.exports = Login;