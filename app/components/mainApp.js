import ReactDOM from 'react-dom';
import React from 'react';
import DataController from '../data/dataController';
import { Bar, defaults } from 'react-chartjs-2';
import ChartOptions from '../chartOptions/chartOptions';
import ChartInputs from '../chartOptions/chartInputs';
import NBASlider from './nba-slider';

let dataController = new DataController();
let chartInputs = ChartInputs(dataController);

// Change globals
defaults.global.defaultFontColor = '#FFF';
defaults.global.defaultFontFamily = 'Arial';


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
        chartInputs.datasets[0].label = `Points Scored: ${dataController.currentDate}`;
        this.refs.chart.chart_instance.update();
    }
}
