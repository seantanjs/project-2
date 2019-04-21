

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
  var transactionData = ['0'];


  for(var i=0; i<response.res.length; i++) {
    accumulatedSum = accumulatedSum + parseInt(response.res[i].monthly_saving_amount);
    savingsData.push(accumulatedSum);
  }

  for(var i=0; i<response.res.length; i++) {
    // parseDate = time.parser(response.res[i].transaction_date);
    var formattedDate = moment(response.res[i].transaction_date).format('DD-MMM-YYYY');
    transactionData.push(formattedDate);
    console.log(transactionData);
  }

console.log(savingsData);


var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        // labels: ['0', '18 Apr', '19 Apr', '20 Apr', '21 Apr', '22 Apr', '23 Apr'],
        labels: transactionData,
        datasets: [{
            label: 'Accumulated Savings',
            data: savingsData,
            backgroundColor:'rgba(255, 99, 132, 0.6)'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Accumulated Savings',
            fontSize: 25
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
                    max: 12000
                }
            }],
            xAxes: [{
               scaleLabel: {
                display: true,
                labelString: 'Date',
                fontSize: 20
                }
                // type: 'time',
                // time: {
                //     unit: 'week'
                // }
            }]
        }
        //     xAxes: [{
        //         type: 'time',
        //         time: {
        //             unit: 'day'
        //         }
        //     }]
        // }
        // legend: {
        //     position: 'right',
        //     // labels: {
        //     //     fontColor: 'black'
        //     // }
        // }
    }
});



};





// response text {"res":[
// {"id":1,"transaction_date":"2019-04-17T16:00:00.000Z","monthly_income_amount":"5000.00","monthly_expenses_amount":"2500.00","monthly_investment_amount":"1000.00","monthly_saving_amount":"1500.00","user_id":1},

// {"id":2,"transaction_date":"2019-04-18T16:00:00.000Z","monthly_income_amount":"5000.00","monthly_expenses_amount":"2000.00","monthly_investment_amount":"500.00","monthly_saving_amount":"2500.00","user_id":1},

// {"id":3,"transaction_date":"2019-04-19T16:00:00.000Z","monthly_income_amount":"5000.00","monthly_expenses_amount":"2000.00","monthly_investment_amount":"500.00","monthly_saving_amount":"2500.00","user_id":1},

// {"id":4,"transaction_date":"2019-04-20T16:00:00.000Z","monthly_income_amount":"5000.00","monthly_expenses_amount":"3000.00","monthly_investment_amount":"1000.00","monthly_saving_amount":"1000.00","user_id":1},

// {"id":5,"transaction_date":"2019-04-21T16:00:00.000Z","monthly_income_amount":"5000.00","monthly_expenses_amount":"2500.00","monthly_investment_amount":"2000.00","monthly_saving_amount":"500.00","user_id":1},

// {"id":6,"transaction_date":"2019-04-22T16:00:00.000Z","monthly_income_amount":"5000.00","monthly_expenses_amount":"1500.00","monthly_investment_amount":"1500.00","monthly_saving_amount":"2000.00","user_id":1}
// ]}