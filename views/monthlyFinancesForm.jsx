var React = require('react');

var Layout = require('./layout');


class MonthlyFinancesForm extends React.Component {
  render() {

    let actionAttribute = `/monthly_input`;

    return (
        <Layout loggedInUser = {this.props.username}>

<script src="script.js"></script>

      <div class="goal-container">


            <div class="form-wrapper">

                <form method="POST" action={actionAttribute}>
                    <div align="center">
                    <h2>My Current Month's Finances</h2>
                    </div><br/>

                    <div class="form-row">
                            <div class="col-6">
                                <h4>Monthly Income</h4>
                                <h4>Monthly Expenses</h4>
                                <h4>Monthly Investment</h4>
                                <h4>Monthly Savings</h4>
                            </div>
    <div class="col-6">
        <h4 class="mr-3 d-inline">S$</h4>
        <input id="income" onkeydown="calculateSavings()" type="text" name="monthly_income_amount" class="form-control textbox w-75 d-inline" placeholder="0" maxlength="10"/><br/>
                <h4 class="mr-3 d-inline">S$</h4>
                <input id="expenses" type="text" name="monthly_expenses_amount" class="form-control textbox w-75 d-inline" placeholder="0" maxlength="10"/><br/>
                <h4 class="mr-3 d-inline">S$</h4>
                <input id="investment" type="text" name="monthly_investment_amount" class="form-control textbox w-75 d-inline" placeholder="0" maxlength="10"/><br/>
                <h4 class="mr-3 d-inline">S$</h4>
                <input type="text" name="monthly_saving_amount" class="form-control textbox w-75 d-inline" placeholder="0" maxlength="10"/>
                            </div>
                    </div>
                    <br/>
                    <input type="submit" class="btn btn-primary float-right" value="Submit"/>
                </form>

            </div>

        </div>

    </Layout>
    );
  }
}

module.exports = MonthlyFinancesForm;