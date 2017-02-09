import Chart from 'chart.js';
import Colors from './colors/colors';

var nbaChart = document.getElementById("nbaChart");
var myChart = new Chart(nbaChart, {
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
                    beginAtZero:true
                },
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        },
        title: {
            display: true,
            text: 'NBA 2016-2017'
        }
    }
});
