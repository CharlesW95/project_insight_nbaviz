import NBASlider from './nba-slider';


export default {
    plugin: // The plugin
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                max: 40
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

};

