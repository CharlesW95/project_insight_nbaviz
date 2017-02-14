import ReactDOM from 'react-dom';
import React from 'react';
import DataController from '../data/dataController';
import { Bar, defaults } from 'react-chartjs-2';
import ChartOptions from '../chartOptions/chartOptions';
import ChartInputs from '../chartOptions/chartInputs';
import NBASlider from './nba-slider';
import FloatingHead from './floating-head';
import Colors from '../colors/colors';
import MoveBall from './move-ball';

// import componentWillMount from 'head-extension.js'

let dataController = new DataController();
let chartInputs = ChartInputs(dataController);

// Change globals
defaults.global.defaultFontColor = '#FFF';
defaults.global.defaultFontFamily = 'Arial';
// defaults.global.animationSteps = 10000000;
Chart.defaults.global.animation.duration = 250;

var curry = new Image();
curry.src = '../app/static/images/curry.png';
var green = new Image();
green.src = '../app/static/images/green.png';
var durant = new Image();
durant.src = '../app/static/images/durant.png';
var thompson = new Image();
thompson.src = '../app/static/images/thompson.png';
// cloud.src = 'https://i.imgur.com/DIbr9q1.png';

Chart.pluginService.register({
    afterUpdate: function(chart) {
        chart.config.data.datasets[0]._meta[0].data[0]._model.pointStyle = curry;
        // chart.config.data.datasets[0]._meta[].data[0]._model.pointStyle = durant;
        chart.config.data.datasets[0]._meta[0].data[1]._model.pointStyle = durant;
        chart.config.data.datasets[0]._meta[0].data[2]._model.pointStyle = thompson;
        chart.config.data.datasets[0]._meta[0].data[3]._model.pointStyle = green;
    }
});


export default class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.updateGraph = this.updateGraph.bind(this);
    }

    render() {
        return (
            <div>
                <div id="chart-container">
                    
                    <Bar ref='chart' width={400} height={450} options={ChartOptions} data={chartInputs} />
                </div>
                <NBASlider id= "ball" dataChangedCallback={this.updateGraph} />
                
            </div>
        );
    };

    updateGraph(xPos) {
        dataController.updateCurrentData(xPos);
        
        chartInputs.datasets[0].data = dataController.headsData;
        chartInputs.datasets[1].data = dataController.currentData;

        chartInputs.datasets[1].label = (dataController.Win == 1 ? 'WIN' : 'LOSS');
        chartInputs.datasets[1].backgroundColor = (dataController.Win == 1 ? Colors.warrior_gold : Colors.warrior_blue);
      
        chartInputs.datasets[0].label = `Points Scored: ${dataController.currentDate}`;
        this.refs.chart.chart_instance.update();

        // Move headas


    }
}
