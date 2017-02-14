import { Chart } from 'react-chartjs-2';
 
componentWillMount(Chart) {
    Chart.pluginService.register({
        beforeDatasetsDraw: function (chart, easing) {
            // Plugin code.
            console.log("hi")
        }
    });
}