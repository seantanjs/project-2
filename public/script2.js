
//AJAX call function
window.onload = function() {

// make a new request
var request = new XMLHttpRequest();

// listen for the request response
request.addEventListener("load", responseHandler);

// ready the system by calling open, and specifying the url
var url = "/fetch_finance_data";
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
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth:3,
            hoverBordercolor:'#000'
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