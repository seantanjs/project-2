var React = require('react');

var Layout = require('./layout');


class SavingsTracking extends React.Component {
  render() {




    return (
        <Layout loggedInUser = {this.props.username}>


                <div class="col-10 bar-chart" style={{"margin":"30px auto"}}>
                    <canvas id="barChart"></canvas>
                </div>

        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>


        <script src="moment.js"></script>
        <script src="/script3.js"></script>


    </Layout>
    );
  }
}

module.exports = SavingsTracking;