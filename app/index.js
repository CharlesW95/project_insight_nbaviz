'use strict';
import ReactDOM from 'react-dom';
import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import Colors from './colors/colors';
import ChartOptions from './chartOptions/chartOptions';
import NBASlider from './components/nba-slider';
import './static/css/styles.css';

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
        <Bar width={400} height={400} options={ChartOptions} data={data} />
        <NBASlider />
    </div>,
    document.getElementById('main-container')
);
