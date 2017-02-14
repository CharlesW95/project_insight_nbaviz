import Colors from '../colors/colors';

export default function(dataController) {
    return ({
        labels: ["Curry", "Durant", "Thompson", "Green"],
        datasets: [ {
            type: 'line',
            fill: false,
            borderColor: "transparent",
            label: `Points Scored: ${dataController.currentDate}`,
            

            data: dataController.headsData,
            
        }, {
            type: 'bar',
            // fill: false,
            // borderColor: "transparent",
            // label: `Points Scored: ${dataController.currentDate}`,
            
            label: (dataController.Win == 1 ? 'WIN' : 'LOSS'),
            backgroundColor: (dataController.Win == 1 ? Colors.warrior_gold : Colors.warrior_blue),
            data: dataController.currentData,


        }]
    });
}

/*labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                type: 'bar',
                  label: "Visitor",
                    data: [200, 185, 590, 621, 250, 400, 95],
                    fill: false,
                    backgroundColor: '#71B37C',
                    borderColor: '#71B37C',
                    hoverBackgroundColor: '#71B37C',
                    hoverBorderColor: '#71B37C',
                    yAxisID: 'y-axis-1'
            }, {
                label: "Sales",
                    type:'line',
                    data: [51, 65, 40, 49, 60, 37, 40],
                    fill: false,
                    borderColor: '#EC932F',
                    backgroundColor: '#EC932F',
                    pointBorderColor: '#EC932F',
                    pointBackgroundColor: '#EC932F',
                    pointHoverBackgroundColor: '#EC932F',
                    pointHoverBorderColor: '#EC932F',
                    yAxisID: 'y-axis-2'
            } ]*/