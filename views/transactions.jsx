var React = require('react');

var Layout = require('./layout');

const moment = require('moment');


class Transactions extends React.Component {
  render() {

    const dataList = this.props.dataSet.map( eachData => {
        // console.log(moment(eachData.transaction_date).format('YYYY-MM-DD'));
  return <tr>
            <td>{eachData.monthly_saving_amount}</td>
            <td>{moment(eachData.transaction_date).format('DD MMM YYYY').toString()}</td>
            <td>{eachData.target_amount}</td>
            <td>{eachData.time_horizon}</td>
            <td>{moment(eachData.start_date).format('DD MMM YYYY').toString()}</td>
            <td>{moment(eachData.end_date).format('DD MMM YYYY').toString()}</td>

            <td>
                <form class="d-inline" method="GET" action={`/transactions/${moment(eachData.transaction_date).format('YYYY-MM-DD').toString()}/edit`}>
                <input type="submit" class="btn btn-warning" value="edit"/>
                </form>&nbsp;&nbsp;
                <form class="d-inline" method="POST" action={`/transactions/${moment(eachData.transaction_date).format('YYYY-MM-DD')}?_method=DELETE`}>
                <input type="submit" class="btn btn-danger" value="delete"/>
                </form>
            </td>
        </tr>
  })


    return (
        <Layout loggedInUser = {this.props.username}>

        <div align="center" class="mainDiv">
        <br/><br/>
        <h1>Welcome to Transactions</h1><br/>
         <div class="tableDiv col-9">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <td scope="col">Monthly Saving</td>
                        <td scope="col">Transaction Date</td>
                        <td scope="col">Goal Amount</td>
                        <td scope="col">Duration</td>
                        <td scope="col">Start Date</td>
                        <td scope="col">End Date</td>
                        <td scope="col">Actions</td>
                    </tr>
                </thead>
            <tbody>
                {dataList}
            </tbody>
            </table>
            </div>
            </div>


    </Layout>
    );
  }
}

module.exports = Transactions;



// <form class="d-inline" method="POST" action={`/transactions/${moment(eachData.transaction_date).format('YYYY-MM-DD')}?_method=PUT`}>
//                 <input type="submit" class="btn btn-warning" value="edit"/>
//                 </form>