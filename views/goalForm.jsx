var React = require('react');

var Layout = require('./layout');


class GoalForm extends React.Component {
  render() {

    let actionAttribute = `/goal`;

    return (
        <Layout loggedInUser = {this.props.username}>



      <div class="goal-container">


            <div class="form-wrapper">

                <form method="POST" action={actionAttribute}>
                    <div class="form-row">
                            <h1 class="col-4">Step 1</h1>
                            <h2 class="col-4">My Target Goal</h2><br/>
                            <div class="col-4">
                                <h4 class="mr-3 d-inline">S$</h4>
                                <input type="text" name="target_amount"class="form-control textbox w-75 d-inline" placeholder="0" maxlength="10"/>
                            </div>
                    </div><br/><br/>

                    <div class="form-row">
                            <h1 class="col-4">Step 2</h1>
                            <h2 class="col-4">No. of years to achieve goal</h2><br/>
                            <div class="col-4">
                                <h4 class="mr-3 d-inline">S$</h4>
                                <input type="text" name="time_horizon"class="form-control textbox w-75 d-inline" placeholder="0" maxlength="10"/>
                            </div>
                    </div><br/><br/>

                    <div align="center">
                    <h2>My Current Finances</h2>
                    </div>

                    <div class="form-row">
                            <h1 class="col-4">Step 3</h1>
                            <div class="col-4">
                                <h4>Monthly Income</h4>
                                <h4>Monthly Expenses</h4>
                                <h4>Monthly Investment</h4>
                                <h4>Monthly Savings</h4>
                            </div>
    <div class="col-4">
        <h4 class="mr-3 d-inline">S$</h4>
        <input id="income" onKeyDown="calculateSavings()" type="text" name="monthly_income_amount" class="form-control textbox w-75 d-inline" placeholder="0" maxlength="10"/><br/>
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

module.exports = GoalForm;






// <div class="full-container step-container">
//       <div class="container relative">
//         <div class="row">
//           <div class="col-sm-10 no-padding">
//             <div class="step">
//               <div class="step-desc">Step</div>
//               <div class="step-number">01</div>
//             </div>
//             <div class="form-wrapper">
//               <div class="col-md-5">
//                 <h3 class="title">My Investment Goal <br/>(Future Value)</h3>
//               </div>
//               <div class="col-md-7">
//                 <div class="form-group">
//                   <label for="existing-investment">S$</label>
//                   <input type="text" class="form-control textbox" id="future-value" placeholder="0" maxlength="8"/>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div id="hidden-box"></div>
//         <div class="summary-box hidden-sm hidden-xs" id="sticky-box">
//           <div class="title">Amount that you should invest per month</div>
//           <div class="bottom-line"></div>
//           <div class="wealth-value">
//             <div class="currency"></div>
//             <div class="wealth-amount"></div>
//           </div>
//           <div class="separator"></div>
//           <div class="cta-message">Find out <a href="http://www.dbs.com.sg/personal/investments/unit-trusts/get-to-know-unit-trusts?pid=sg-dbs-lp-investments-monthly-investment-calculator-texthowtoapply-get-to-know-unit-trusts#how-to-apply" style={{"color":"#cc0000;"}}>How to Apply</a> today.</div>
//         </div>
//       </div>
//     </div>

//     <div class="full-container gray-section step-container">
//       <div class="container">
//         <div class="row">
//           <div class="col-sm-10 no-padding">
//             <div class="step">
//               <div class="step-desc">Step</div>
//               <div class="step-number">02</div>
//             </div>
//             <div class="form-wrapper">
//               <div class="col-md-5">
//                 <h3 class="title">My Present Investments <br/>(If any)</h3>
//               </div>
//               <div class="col-md-7">
//                 <div class="form-group">
//                   <label for="existing-investment">S$</label>
//                   <input type="text" class="form-control textbox" id="present-value" placeholder="0" maxlength="8"/>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div class="full-container step-container">
//       <div class="container">
//         <div class="row">
//           <div class="col-sm-10 no-padding">
//             <div class="step">
//               <div class="step-desc">Step</div>
//               <div class="step-number">03</div>
//             </div>
//             <div class="form-wrapper">
//               <div class="col-md-12">
//                 <h3 class="title">My Expected Returns</h3>
//               </div>
//               <div class="form-group">
//                 <div class="col-md-5">
//                   <label class="label-2">No. of years to achieve goal</label>
//                 </div>
//                 <div class="col-md-7">
//                   <label for="existing-investment">&nbsp;&nbsp;&nbsp;&nbsp;</label>
//                   <input type="text" class="form-control textbox" id="no-of-years" placeholder="0" maxlength="2"/>
//                   <label for="existing-investment">&nbsp;years</label>
//                 </div>
//               </div>
//               <div class="form-group">
//                 <div class="col-md-5">
//                   <label class="label-2">Rate of return expected per year</label>
//                 </div>
//                 <div class="col-md-7">
//                   <label for="existing-investment">&nbsp;&nbsp;&nbsp;&nbsp;</label>
//                   <input type="text" class="form-control textbox" id="rate-of-return" placeholder="0" maxlength="5"/>
//                   <label for="existing-investment">&nbsp;%</label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>