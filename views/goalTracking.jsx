var React = require('react');

var Layout = require('./layout');


class GoalTracking extends React.Component {
  render() {


    return (
        <Layout loggedInUser = {this.props.username}>


        <div class="container">
  <div class="row">
    <div class="col-6">
      <canvas id="myChart" width="200" height="200"></canvas>

    </div>
    <div class="col-6">
      <canvas id="myChartbar" width="200" height="200"></canvas>
    </div>
  </div>
  <canvas id="canvas"></canvas>
</div>



        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <script src="/script.js"></script>

    </Layout>
    );
  }
}

module.exports = GoalTracking;


// <canvas id="myChart"></canvas>