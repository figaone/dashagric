import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class barchart extends Component {
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
                    data: [66.252,
                        88.335,
                        92.752,
                        83.919,
                        44.168,
                        26.501,
                        26.501,
                        48.584,
                        57.418,
                        44.168,
                        35.334,
                        53.001]
                },
                {
                    name: 'MICROBIAL P(mg/kg)',
                    data: [16.286,
                        20.773,
                        23.278,
                        8.410 ,
                        29.279,
                        23.081,
                        13.646,
                        18.317,
                        57.303,
                        18.437,
                        24.609,
                        16.980 ]
                },
                {
                    name: 'MICROBIAL C(mg/kg)',
                    data: [147.34,
                        110.25,
                        204.32,
                        110.29,
                        223.82,
                        56.139,
                        147.36,
                        92.074,
                        204.32,
                        110.15,
                        223.96,
                        92.071]
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

export default barchart;