import ReactDOM from 'react-dom';
import React from 'react';
import DataController from '../data/dataController';
import { Bar, defaults } from 'react-chartjs-2';
import ChartOptions from '../chartOptions/chartOptions';
import ChartInputs from '../chartOptions/chartInputs';
import NBASlider from './nba-slider';
import FloatingHead from './floating-head';
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
        /*onAnimationComplete: function (chart, easing) {
            // Plugin code.
            // console.log(chart.controllers);
            var heights = chart.data.datasets[0].data;
            var ctx = chart.chart.canvas.getContext("2d");
            var width = ctx.canvas.clientWidth-55;
            var len = chart.boxes.length;



            for ( var i = 1; i <= len; i++) {
                // console.log(chart.boxes[el].bottom);
                

                // var width = chart.boxes[i];
                // var height = chart.boxes[el].maxHeight;
                // console.log(width);
                // var y = chart.boxes[el].top;
                ctx.fillStyle = "#FF0000";
                // ctx.fillRect(width/4*i-25,400-heights[i-1]/40*400,10,100);
                ctx.drawImage(sun, width/4*i-35, 338-(heights[i-1]) - (heights[i-1]-5)/45*338 );
                // console.log(i-1);
                // console.log(width/4*i-25)
                // console.log(heights[i-1]/40*400);
                // console.log(width/4*i);
                // console.log(width);
                // ctx.fillRect(200,y+100,75,75);

                // console.log(chart.boxes.ChartElement);
            }

            // console.log(ctx);
            // ctx.fillStyle = "#FF0000";
            // ctx.fillRect(0,0,150,75);
        } */
});


// var originalDraw = Chart.controllers.bar.prototype.draw;

// Chart.controllers.bar.prototype.draw = function(ease) {
//   originalDraw.call(this, ease);
//   console.log(this);
// };

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
                <NBASlider dataChangedCallback={this.updateGraph} />
            </div>
        );
    };

    updateGraph(xPos) {
        dataController.updateCurrentData(xPos);
        chartInputs.datasets[0].data = dataController.currentData;
        chartInputs.datasets[1].data = dataController.currentData;
        chartInputs.datasets[0].label = `Points Scored: ${dataController.currentDate}`;
        this.refs.chart.chart_instance.update();

        // Move headas


    }
}
