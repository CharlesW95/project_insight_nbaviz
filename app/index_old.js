"use strict";

import Chart from 'chart.js';
import Colors from './colors/colors';
import NBASlider from './components/nba-slider.js';
import './static/css/styles.css';

// Change global settings
Chart.defaults.global.defaultFontColor = '#FFF';
Chart.defaults.global.defaultFontFamily = 'Arial';

let nbaChart = document.getElementById("nbaChart");
let myChart = new Chart(nbaChart, {
    type: 'bar',
    data: {
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
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                },
                barPercentage: 0.5
            }]
        },
        title: {
            display: true,
            text: 'NBA 2016-2017',
            fontSize: 32
        }
    }
});

// Register the custom slider element
document.registerElement("nba-slider", NBASlider);
let nbaSlider = new NBASlider();
// Instantiate the slider
document.getElementById("nbaSlider").appendChild(nbaSlider);
