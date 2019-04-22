var React = require('react');

var Layout = require('./layout');


class GoalTracking extends React.Component {
  render() {

    // console.log("HERE IS DATASET", this.props.dataSet);


    return (
        <Layout loggedInUser = {this.props.username}>


                <div class="col-10 line-chart" style={{"margin":"30px auto"}}>
                    <canvas id="lineChart"></canvas>
                </div>




        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>


        <script src="moment.js"></script>
        <script src="/script1.js"></script>


    </Layout>
    );
  }
}

module.exports = GoalTracking;


//  <canvas id="myChart"></canvas>




// <div class="container">
//   <div class="row">
//     <div class="col-6">
//       <canvas id="myChart" width="200" height="200"></canvas>

//     </div>
//     <div class="col-6">
//       <canvas id="myChartbar" width="200" height="200"></canvas>
//     </div>
//   </div>
//   <canvas id="canvas"></canvas>
// </div>

//   <script type = "text/JavaScript" src = "https://MomentJS.com/downloads/moment.js"></script>



// <div class="container">
//             <div class="row">

//                 <div class="col-6">
//                     <canvas id="lineChart"></canvas>
//                 </div>

//                 <div class="col-6">
//                     <canvas id="pieChart"></canvas>
//                 </div>
//             </div>
//             <div class="col-8" style={{"margin":"auto"}}>
//             <canvas id="yourChart"></canvas>
//             </div>
//         </div>


// <div class="container">
//             <div class="row">

//                 <div class="col-6 line-chart">
//                     <canvas id="lineChart"></canvas>
//                 </div>

//                 <div class="col-6 pieChart">
//                     <canvas id="pieChart"></canvas>
//                 </div>
//             </div>
//             <div class="col-8 donutChart" style={{"margin":"auto"}}>
//             <canvas id="donutChart"></canvas>
//             </div>
//         </div>