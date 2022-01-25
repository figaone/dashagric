import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class chartapex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ['#ccc', '#3c4ccf', '#02a499'],
                chart: {
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false,
                    }
                },
                legend: {
                    show: false
                },

                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                grid: {
                    borderColor: '#f8f8fa',
                    row: {
                        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['0-15',
                        '15-30',
                        '0-15',
                        '15-30',
                        '0-15',
                        '15-30',
                        '0-15',
                        '15-30',
                        '0-15',
                        '15-30',
                        '0-15',
                        '15-30'],
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                }
            },

            series: [
                {
                    name: 'MICROBIAL N(mg/kg)',
                    data: [136.92,
                        39.751,
                        101.59,
                        35.334,
                        39.751,
                        66.252,
                        44.168,
                        39.751,
                        70.668,
                        66.252,
                        88.335,
                        57.418]
                },
                {
                    name: 'MICROBIAL P(mg/kg)',
                    data: [9.333,
                    3.114,
                    5.155,
                    5.429,
                    13.386,
                    6.431,
                    7.538,
                    9.318,
                    31.061,
                    6.626,
                    4.683,
                    4.584]
                },
                {
                    name: 'MICROBIAL C(mg/kg)',
                    data: [185.04,
                    74.006,
                    165.85,
                    91.896,
                    146.69,
                    92.057,
                    110.14,
                    92.057,
                    185.06,
                    110.3,
                    147.13,
                    110.13]
                }
            ],
        }
    }
    render() {
        return (
            <React.Fragment>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="290" />
            </React.Fragment>

        );
    }
}

export default chartapex;