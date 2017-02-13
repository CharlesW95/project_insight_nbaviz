import Colors from '../colors/colors';

export default function(dataController) {
    return ({
        labels: ["Curry", "Green", "Durant", "Thompson"],
        datasets: [{
            label: `Points Scored: ${dataController.currentDate}`,
            data: dataController.currentData,
            backgroundColor: [
                Colors.warrior_blue,
                Colors.warrior_gold,
                Colors.warrior_blue,
                Colors.warrior_gold
            ]
        }]
    });
}
