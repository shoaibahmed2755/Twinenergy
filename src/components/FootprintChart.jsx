import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const FootprintChart = ({ dataObj }) => {
  const labels = ['Consumption', 'Travel', 'Digital', 'Finance'];
  const values = [dataObj.consumption, dataObj.travel, dataObj.digital, dataObj.finance];

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: ['#10B981', '#0EA5E9', '#6366F1', '#F59E0B'],
        borderColor: '#FFFFFF',
        borderWidth: 4,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: { position: 'bottom', labels: { usePointStyle: true } },
      tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.parsed}%` } },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default FootprintChart;
