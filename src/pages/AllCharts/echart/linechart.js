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
      ['ContA', 21,19.5,22.5,21.5,20.5,21],
      ['Fert1A', 32,30.5,25,27.5,28,28.6],
      ['Fert2A', 22.5,26,28,27,26.5,25.2],
      ['Fert3A', 28,27.5,31,29.5,30,29.2]
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