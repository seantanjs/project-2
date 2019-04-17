var React = require('react');

var Layout = require('./layout');


class Home extends React.Component {
  render() {


    return (
        <Layout loggedInUser = {this.props.username}>

<div class="container">
<div class="row">

        <div class="card" style={{"width": "25rem;", "height": "28rem;"}}>
            <div class="card-body">
                <h5 class="card-title">Discover a whole new way to save</h5><br/>
                <p class="card-text"><i class="fa fa-angle-right" style={{"font-size":"24px"}}></i> Reaching your savings goal has never been so simple, just tell us your target amount & time horizon and we'll calculate how much you should save each month. </p>
                <p class="card-text"><i class="fa fa-angle-right" style={{"font-size":"24px"}}></i> Get timely reminders through our notification system which informs you of the upcoming date to enter your saving amount for the month. </p>
                <p class="card-text"><i class="fa fa-angle-right" style={{"font-size":"24px"}}></i> Track your saving goal with our graph chart which tells you whether you are on/off track.</p>
                <br/>
                <a href="/goal" class="btn btn-primary">Get Started</a>
            </div>
        </div>


        <div class="card" style={{"width": "25rem;", "height": "30rem;"}}>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>




</div>
</div>

    </Layout>
    );
  }
}

module.exports = Home;


// <form method="POST" action={actionAttribute}>
// Enter id: <input type="text" name="id"/><br/><br/>
// Enter num: <input type="text" name="num"/><br/><br/>
// Enter name: <input type="text" name="name"/><br/><br/>
// Enter img: <input type="text" name="img"/><br/><br/>
// Enter height: <input type="text" name="height"/><br/><br/>
// Enter weight: <input type="text" name="weight"/><br/><br/>
// <input type="submit" class="btn btn-primary" value="Submit"/>&nbsp;&nbsp;&nbsp;&nbsp;
// <a href={`/`} class="btn btn-danger">Back</a>
// </form>