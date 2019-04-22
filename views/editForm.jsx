var React = require('react');

var Layout = require('./layout');

const moment = require('moment');


class EditForm extends React.Component {
  render() {

    console.log("LOOK HERE LA",this.props.res);
    console.log("HEY LOOK HERE LA TOO",this.props.txnDate);

    return (
        <Layout loggedInUser = {this.props.username}>

        <div class="edit-form">

        <div class="col-10">

                <form method="POST" action={`/transactions/${this.props.txnDate}?_method=PUT`}>
                <h1>Edit Form</h1>

                    <h4 class="mr-3 d-inline">Edit Savings</h4>
                    <input type="text" name="num" value={this.props.res[0].monthly_saving_amount}/><br/><br/>
                    <input type="submit" class="btn btn-primary" value="Confirm"/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href={`/transactions`} class="btn btn-danger">Back</a>

                <br/><br/>
                </form>

        </div>

        </div>


    </Layout>
    );
  }
}

module.exports = EditForm;


// <form class="d-inline" method="POST" action={`/transactions/${moment(eachData.transaction_date).format('YYYY-MM-DD')}?_method=PUT`}>
//                 <input type="submit" class="btn btn-warning" value="edit"/>
//                 </form>




// <form method="POST" action={`/transactions/${moment(eachData.transaction_date).format('YYYY-MM-DD')}?_method=PUT`}>
//         Edit saving:<input type="text" name="num" value="BACK IT ON ME"/><br/><br/>
//         <input type="submit" class="btn btn-primary" value="Confirm"/>&nbsp;&nbsp;&nbsp;&nbsp;
//         <a href={`/`} class="btn btn-danger">Back</a>
//         </form>


// http://localhost:3000/pokemon/151?_method=PUT

// http://localhost:3000/transactions/2019-04-22?_method=PUT