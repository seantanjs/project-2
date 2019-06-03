
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


var months = 0;


// what to do when we recieve the request
var responseHandler = function() {
  var response = JSON.parse (this.responseText);
  console.log(response);

var months = 0;

var startDate = response.res[0].start_date;
var formattedStartDate = moment(startDate).format("DD MMM YYYY"); //22 Apr 2019

var firstElement = moment(startDate).format("DD MM YYYY");
console.log(firstElement); //22 04 2019

var dateArray = [formattedStartDate];

for(var i=0; i<parseInt(response.res[0].time_horizon); i++) {
    var dateStringArr = firstElement.split(' '); // ["22", "04", "2019"]
    var month = parseInt(dateStringArr[1]) + 1; // 5
    var year = parseInt(dateStringArr[2]) //  2019
    if(month > 12) {
        var year = parseInt(dateStringArr[2]) + 1;
        var month = month - 12;
    }
    firstElement = "" + dateStringArr[0] + " " + month + " " + year;
    console.log(firstElement);

    var updatedDateStringArr = firstElement.split(' ');
    console.log(updatedDateStringArr);

    var monthInText;

    switch(updatedDateStringArr[1]) {
        case "1":
            monthInText = "Jan";
            break;
        case "2":
            monthInText = "Feb";
            break;
        case "3":
            monthInText = "Mar";
            break;
        case "4":
            monthInText = "Apr";
            break;
        case "5":
            monthInText = "May";
            break;
        case "6":
            monthInText = "Jun";
            break;
        case "7":
            monthInText = "Jul";
            break;
        case "8":
            monthInText = "Aug";
            break;
        case "9":
            monthInText = "Sep";
            break;
        case "10":
            monthInText = "Oct";
            break;
        case "11":
            monthInText = "Nov";
            break;
        case "12":
            monthInText = "Dec";
            break;
        default:
            monthInText = "No such month";
    }

    var formattedDate = "" + updatedDateStringArr[0] + " " + monthInText + " " +updatedDateStringArr[2];
    // console.log(formattedDate);

    dateArray.push(formattedDate);
}

console.log(dateArray);

var averageSavingsArray = [];

for(var i=0; i<response.res.length; i++) {
    let averageSavings = parseInt(response.res[0].target_amount) / parseInt(response.res[0].time_horizon);

    averageSavingsArray.push(averageSavings);
}

var transactionDateArray = [];

for(var i=0; i<response.res.length; i++) {

    var formattedDate = moment(response.res[i].transaction_date).format('DD MMM YYYY');

    transactionDateArray.push(formattedDate);
}

var randomColorArr = [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
            ];

var backgroundColorArr = [];

for(var i=0; i<response.res.length; i++) {

    const index = Math.floor(Math.random() * 5);
    console.log(index);
    backgroundColorArr.push(randomColorArr[index]);
}

var transactionDataArr = [];

for(var i=0; i<response.res.length; i++) {
    transactionDataArr.push(response.res[i].monthly_saving_amount);
}


var ctx = document.getElementById('barChart');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: transactionDateArray,
        datasets: [{
            label: 'Savings for the month',
            data: transactionDataArr,
            backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth:3,
            hoverBordercolor:'#000'
        }, {
            label: "Average saving per month to reach goal",
            type: 'line',
            data: averageSavingsArray,
            backgroundColor: 'darkgray',
            fill: false
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Savings Per Month',
            fontSize: 25
        },
        legend:{
          display:true
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
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
                    max: 1300
                }
            }],
            xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Date',
                fontSize: 20
                }
            }]
        }
    }
});


};