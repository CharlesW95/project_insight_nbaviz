// This class takes care of formatting the data
// and returning only the relevant row of data
// required for the current bar graph.

import data from '../../data/formatted_data.json';

export default class DataController {
    constructor() {
        this.data = data;
        // Get the first row
        this.updateCurrentData(0);
    };

    updateCurrentData(position) {
        // Length of data is 49.
        // FIXME: Don't use magic numbers
        let index = Math.round((position/365) * 49);
        index = index >= 49 ? 48 : index;
        this.currentData = [
            this.data["Stephen Curry"][index],
            this.data["Draymond Green"][index],
            this.data["Kevin Durant"][index],
            this.data["Klay Thompson"][index]
        ];
        this.currentDate = this.data["Date"][index];
    }


}
