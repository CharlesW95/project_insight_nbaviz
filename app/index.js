'use strict';
import ReactDOM from 'react-dom';
import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import Colors from './colors/colors';
import ChartOptions from './chartOptions/chartOptions';
import NBASlider from './components/nba-slider';
import DataController from './data/dataController';
import './static/css/styles.css';

// Change globals
defaults.global.defaultFontColor = '#FFF';
defaults.global.defaultFontFamily = 'Arial';

let dataController = new DataController();

let data = {
    labels: ["Curry", "Green", "Durant", "Thompson"],
    datasets: [{
        label: `Points Scored: ${dataController.currentDate}`,
        data: dataController.currentData,
        backgroundColor: [
            Colors.orange,
            Colors.red,
            Colors.blue,
            Colors.green
        ]
    }]
};

class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.updateGraph = this.updateGraph.bind(this);
    }

    render() {
        return (
            <div>
                <div id="chart-container">
                    <Bar ref='chart' width={400} height={450} options={ChartOptions} data={data} />
                </div>
                <NBASlider dataChangedCallback={this.updateGraph} />
            </div>
        );
    };

    updateGraph(xPos) {
        dataController.updateCurrentData(xPos);
        data.datasets[0].data = dataController.currentData;
        data.datasets[0].label = `Points Scored: ${dataController.currentDate}`;
        this.refs.chart.chart_instance.update();
        console.log(this.refs.chart.chart_instance);
    }
}

ReactDOM.render(
    <MainApp />,
    document.getElementById('main-container')
);
