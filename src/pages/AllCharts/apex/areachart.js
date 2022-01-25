import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class areachart extends Component {
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
                    data: [61.835,
                        39.751,
                        48.584,
                        44.168,
                        66.252,
                        44.168,
                        39.751,
                        44.168,
                        61.835,
                        44.168,
                        39.751,
                        35.334]
                },
                {
                    name: 'MICROBIAL P(mg/kg)',
                    data: [13.832,
                        13.852,
                        33.208,
                        11.316,
                        19.609,
                        16.498,
                        4.636,
                        4.477,
                        9.543,
                        13.427,
                        7.928,
                        1.918]
                },
                {
                    name: 'MICROBIAL C(mg/kg)',
                    data: [204.5,
                        110.24,
                        110.29,
                        92.076,
                        204.32,
                        110.31,
                        156.73,
                        92.087,
                        188.9,
                        102.99,
                        157.88,
                        86.088]
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

export default areachart;