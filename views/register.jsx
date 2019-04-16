var React = require('react');

class Register extends React.Component {
    render(){
        return (
             <html>
            <head>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/registerstyle.css"/>
                <title>Registration Form</title>
            </head>
            <body>
                <h1>Registration</h1>
                <br/>
                <div class="container">
                <form method="POST" action="/register">
                    Enter username <input name="username" className="form-control" /><br/>
                    Enter password <input type="password" name="password" className="form-control" /><br/>
                    <input id="createAcc" type="submit" class="btn btn-primary" value="Create Account"/>
                </form>
                </div>
            </body>
        </html>);
    }
}

module.exports = Register;