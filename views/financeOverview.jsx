var React = require('react');

var Layout = require('./layout');


class FinanceOverview extends React.Component {
  render() {

    // console.log("HERE IS DATASET", this.props.dataSet);
    return (
        <Layout loggedInUser = {this.props.username}>

       <div class="donut-container col-10">
            <canvas id="donutChart"></canvas>
        </div>


        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>


        <script src="moment.js"></script>
        <script src="/script2.js"></script>


    </Layout>
    );
  }
}

module.exports = FinanceOverview;