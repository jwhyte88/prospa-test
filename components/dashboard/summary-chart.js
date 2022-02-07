import React from 'react';
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

const options = { 
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    }
  }
}

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug'],
  datasets: [
    {
      label: 'Price',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(250,74,132, 0.8)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(250,74,132, 0.8)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [4800, 8700, 10700, 12300, 12400, 8000, 6000]
    }
  ]
};

export default () => (
  <div>
    <Line
      data={data}
      options={options}
      width={260}
      height={110}
    />
  </div>
);