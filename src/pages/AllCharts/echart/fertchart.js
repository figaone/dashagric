import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Line extends Component {
    getOption = () => {
        return {
            legend: {
               
            },
  tooltip: {},
  dataset: {
    source: [
      ['product', 'Rep1', 'Rep2', 'Rep3','Rep4','Rep5','Rep6'],
      ['ContB', 23.7,23.8,23.8,23.7,22.8,24.4],
      ['Fert1B', 30.1,28.9,30.9,34.4,32.7,32.7],
      ['Fert2B', 30.6,31.1,28.1,34.9,30.1,25.5],
      ['Fert3B', 36.1,36.6,38.7,37.1,36.8,37.1]
    ]
  },
  xAxis: { type: 'category' ,
  axisLabel: {
    show: true,
    interval: 0
  }
            },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },{ type: 'bar' },{ type: 'bar' },{ type: 'bar' }]
        };
    };
    render() {
        return (
            <React.Fragment>
                <ReactEcharts style={{ height: "350px" }} option={this.getOption()} />
            </React.Fragment>
        );
    }
}
export default Line;