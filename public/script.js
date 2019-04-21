

// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });


// var ctx = document.getElementById('myChart');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });








// var ctx = document.getElementById('myChartbar');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });




// var ctx = document.getElementById('canvas');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
    // options: {
    //     scales: {
    //         yAxes: [{
    //             ticks: {
    //                 beginAtZero: true
    //             }
    //         }]
    //     }
    // }
// });


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

  var accumulatedSum = 0;
  var savingsData = ['0'];
  var savingsDataWithTarget = ['0'];
  var transactionData = ['0'];
  var currentMonthFinances = [];



  for(var i=0; i<response.res.length; i++) {
    accumulatedSum = accumulatedSum + parseInt(response.res[i].monthly_saving_amount);
    savingsData.push(accumulatedSum);
    savingsDataWithTarget.push(accumulatedSum);
  }

savingsDataWithTarget.push(response.res[0].target_amount);
  // savingsData.push(response.res[0].target_amount);

  for(var i=0; i<response.res.length; i++) {

    var formattedDate = moment(response.res[i].transaction_date).format('DD MMM YYYY');
    // var txDate = response.res[i].transaction_date;
    // var formattedDate = txDate.slice(0,10).split("-");
    // var dateObj = new Date(formattedDate);

    // console.log("HERE LA " + formattedDate);
    // console.log(dateObj)

    transactionData.push(formattedDate);
    // transactionData.push(dateObj);
    console.log(transactionData);
  }

  var endDate = moment(response.res[0].end_date).format('DD MMM YYYY');

  transactionData.push(endDate);

console.log(savingsData);

currentMonthFinances.push(response.res[response.res.length-1].monthly_expenses_amount);
currentMonthFinances.push(response.res[response.res.length-1].monthly_investment_amount);
currentMonthFinances.push(response.res[response.res.length-1].monthly_saving_amount);



var ctx = document.getElementById('lineChart');

// Chart.defaults.global.defaultFontFamily = 'Lato';
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = '#777';

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: transactionData,
        datasets: [{
            label: 'Savings up till ' + moment(response.res[response.res.length-1].transaction_date).format('DD MMM YYYY'),
            data: savingsData,
            borderColor: 'rgba(255, 100, 132, 0.5)',
            backgroundColor: 'rgba(255, 100, 132, 0.5)'
        }, {
            label: 'Target Goal Amount',
            data: savingsDataWithTarget,
            fill: false,
            borderDash: [5,10],
            // borderColor: 'rgba(255, 100, 132, 0.3)',
            borderColor: 'rgb(169, 169, 169, 0.3)',
            type: 'line',
            // backgroundColor: 'rgba(255, 100, 132, 0.5)'
            backgroundColor: 'rgba(169, 169, 169, 0.5)'
        }
        // {
        //     label: 'Target Goal Amount',
        //     data: [12000,12000,12000,12000,12000,12000,12000,12000],
        //     fill: false,
        //     borderColor: 'rgba(48, 162, 232, 0.3)',
        //     type: 'line',
        //     backgroundColor: 'rgba(48, 162, 232, 0.5)'
        // }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Accumulated Savings',
            fontSize: 25
        },
        tooltips: {
        callbacks: {
            label: function(tooltipItem) {
                return "$" + Number(tooltipItem.yLabel);
            }
        }
    },
        scales: {
            yAxes: [{
                scaleLabel: {
                display: true,
                labelString: 'Savings',
                fontSize: 20
                },
                ticks: {
                    beginAtZero:true,
                    max: 15000
                }
            }],
            xAxes: [{
                // type: 'time',
                // unit: 'month',
            scaleLabel: {
                display: true,
                labelString: 'Date',
                fontSize: 20
                }
            }]
        }
    }
});


//build more chart - one pie chart to show breakdown by income, expenses, investment and savings

// var ctx = document.getElementById('pieChart');


//   // var fillColors = [chartColors.green,  chartColors.green, chartColors.red, chartColors.red, chartColors.blue, chartColors.purple];

// var myChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: transactionData,
//         datasets: [{
//             label: 'Accumulated Savings',
//             data: savingsData,
//             fill: true,
//             backgroundColor: [
//             'rgba(255, 100, 132, 0.5)',
//             'rgba(255, 100, 132, 0.5)',
//             'rgba(255, 100, 132, 0.5)',
//             'rgba(255, 100, 132, 0.5)',
//             'rgba(255, 100, 132, 0.5)',
//             'rgba(255, 100, 132, 0.5)',
//             'rgba(255, 100, 132, 0.5)',
//             'rgba(255, 200, 132, 0.5)']
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             text: 'TBA',
//             fontSize: 25
//         },
//         scales: {
//             yAxes: [{
//                 scaleLabel: {
//                 display: true,
//                 labelString: 'Savings',
//                 fontSize: 20
//                 },
//                 ticks: {
//                     beginAtZero:true,
//                     max: 150000
//                 }
//             }],
//             xAxes: [{
//                 // type: 'time',
//                 // unit: 'month',
//             scaleLabel: {
//                 display: true,
//                 labelString: 'Date',
//                 fontSize: 20
//                 }
//             }]
//         }
//     }
// });





var ctx = document.getElementById('donutChart');


  // var fillColors = [chartColors.green,  chartColors.green, chartColors.red, chartColors.red, chartColors.blue, chartColors.purple];

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