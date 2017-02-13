var sun = new Image();
sun.src = 'https://i.imgur.com/yDYW1I7.png';

var cloud = new Image();
cloud.src = 'https://i.imgur.com/DIbr9q1.png';

Chart.pluginService.register({
    afterUpdate: function(chart) {
        chart.config.data.datasets[0]._meta[0].data[7]._model.pointStyle = sun;
        chart.config.data.datasets[1]._meta[0].data[2]._model.pointStyle = cloud;
    }
});

// Create the plugin object with functions for all the chart states
var simplePlugin = {
  beforeInit: function(chartInstance) {},
  afterInit: function(chartInstance) {},

  resize: function(chartInstance, newChartSize) {},

  beforeUpdate: function(chartInstance) {},
  afterScaleUpdate: function(chartInstance) {}
  beforeDatasetsUpdate: function(chartInstance) {}
  afterDatasetsUpdate: function(chartInstance) {}
  afterUpdate: function(chartInstance) {},

  // This is called at the start of a render. It is only called once, even if the animation will run for a number of frames. Use beforeDraw or afterDraw
  // to do something on each animation frame
  beforeRender: function(chartInstance) {},

  // Easing is for animation
  beforeDraw: function(chartInstance, easing) {},
  afterDraw: function(chartInstance, easing) {},

  // Before the datasets are drawn but after scales are drawn
  beforeDatasetsDraw: function(chartInstance, easing) {},
  afterDatasetsDraw: function(chartInstance, easing) {},

  destroy: function(chartInstance) {}
};

// Let Chart.js know about the new plugin
Chart.pluginService.register(simplePlugin);