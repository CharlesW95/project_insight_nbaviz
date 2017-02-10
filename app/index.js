'use strict';
import ReactDOM from 'react-dom';
import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import Colors from './colors/colors';
import ChartOptions from './chartOptions/chartOptions';
import NBASlider from './components/nba-slider';
import './static/css/styles.css';
import Data from '../data/formatted_data.json';

// Change globals
defaults.global.defaultFontColor = '#FFF';
defaults.global.defaultFontFamily = 'Arial';

let data = {
    labels: ["Curry", "Green", "Durant", "Thompson"],
    datasets: [{
        label: 'Points Per Game (PPG)',
        data: [12, 19, 3, 5],
        backgroundColor: [
            Colors.orange,
            Colors.red,
            Colors.blue,
            Colors.green
        ]
    }]
};

ReactDOM.render(
    <div>
        <div id="chart-container">
            <Bar width={400} height={450} options={ChartOptions} data={data} />
        </div>
        <NBASlider />
    </div>,
    document.getElementById('main-container')
);
