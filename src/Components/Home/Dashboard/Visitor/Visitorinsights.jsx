import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const randomData = Array.from({ length: labels.length }, () =>
  Math.floor(Math.random() * 400)
);
const randomData2 = Array.from({ length: labels.length }, () =>
  Math.floor(Math.random() * 400)
);
const randomData3 = Array.from({ length: labels.length }, () =>
  Math.floor(Math.random() * 400)
);

export const data = {
  labels,
  datasets: [
    {
      label: "Loyal Customers",
      data: randomData,
      //   data: labels.map(() => faker.datatype.number({ min: 100, max: 400 })),
      borderColor: "rgba(137, 80, 252, 1)",
      backgroundColor: "rgba(137, 80, 252, 1)",
      cubicInterpolationMode: "monotone",
    },
    {
      label: "Loyal Customers",
      data: randomData2,
      //   data: labels.map(() => faker.datatype.number({ min: 100, max: 400 })),
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 1)",
      cubicInterpolationMode: "monotone",
    },
    {
      label: "Unique Customers",
      data: randomData3,
      //   data: labels.map(() => faker.datatype.number({ min: 100, max: 400 })),
      borderColor: "rgba(60, 216, 86, 1)",
      backgroundColor: "rgba(60, 216, 86, 1)",
      cubicInterpolationMode: "monotone",
    },
  ],
};

export function Visitor() {
  return <Line options={options} data={data} />;
}
