
//AJAX call function
window.onload = function() {

// make a new request
var request = new XMLHttpRequest();

// listen for the request response
request.addEventListener("load", responseHandler);

// ready the system by calling open, and specifying the url
var url = "http://localhost:3000/fetch_finance_data";
request.open("GET", url);

// send the request
request.send();

}


// what to do when we recieve the request
var responseHandler = function() {
  var response = JSON.parse (this.responseText);
  console.log(response);

  var currentMonthFinances = [];

currentMonthFinances.push(response.res[response.res.length-1].monthly_expenses_amount);
currentMonthFinances.push(response.res[response.res.length-1].monthly_investment_amount);
currentMonthFinances.push(response.res[response.res.length-1].monthly_saving_amount);

var ctx = document.getElementById('donutChart');


var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Expenses', 'Investment', 'Savings'],
        datasets: [{
            data: currentMonthFinances,
            backgroundColor: [
            'rgb(251, 202, 95)',
            'rgb(48, 162, 232)',
            'rgb(255, 100, 132)',
            ]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Financial Breakdown',
            fontSize: 25
        }
    }
});


};