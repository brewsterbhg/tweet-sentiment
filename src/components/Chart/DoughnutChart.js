import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ data, ref }) => <Doughnut data={data} />

export default React.memo(DoughnutChart);