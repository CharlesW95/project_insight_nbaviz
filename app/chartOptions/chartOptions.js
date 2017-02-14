// import NBASlider from '../components/nba-slider';


export default {
    plugin: {},//plugin
    // animationDuration: 100000,
    animationEnabled: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                max: 60
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
        text: 'Team Dynamics',
        fontSize: 32
    }
    

};
 
