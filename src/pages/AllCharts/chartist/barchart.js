import React, { Component } from "react";
import ChartistGraph from "react-chartist";

class barchart extends Component {
  render() {
    var barChartData = {
      labels: [
        'ContA',
        'Fert1A',
        'Fert2A',
        'Fert3A'
      ],
      series: [
        [21,32,22.5,28],
        [19.5,30.5,26,27],
        [22.5,25,28,31],
        [21.5,27.5,27,29.5],
        [20.5,28,26.5,30],
        [21,28.6,25.2,29.2]


        // [21,19.5,22.5,21.5,20.5,21],
        // [32,30.5,25,27.5,28,28.6],
        // [22.5,26,28,27,26.5,25.2],
        // [28,27.5,31,29.5,30,29.2],
        // [21,19.5,22.5,21.5,20.5,21],
        // [32,30.5,25,27.5,28,28.6],
      ]
    };
    var barChartOptions = {
      axisX: {
        offset: 60
      },
      low: 0,
      showArea: true,
      seriesBarDistance: 10
    };

    return (
      <React.Fragment>
        <ChartistGraph
          style={{ height: "300px" }}
          data={barChartData}
          options={barChartOptions}
          type={"Bar"}
        />
      </React.Fragment>
    );
  }
}

export default barchart;
