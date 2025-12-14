import { Pie } from "react-chartjs-2"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

export default function PieChart(){

    const pieChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
            },
        },
    }

    const pieChartData = {
        labels: [ "User 1", "User 2", "User 3" ],
        datasets: [
            {
                label: "Marks out of 100",
                data: [
                    60,
                    30,
                    10
                ],
                backgroundColor: [
                    'green',
                    'pink',
                    'cyan'
                ],
                borderWidth: 6,
                borderColor: "#fff"
            }
        ]
    }

    return <>
      <h2>Pie Chart</h2>

      <div style={ { width: "100%", height: 400 } }>
        <Pie options={ pieChartOptions } data={ pieChartData } />
      </div>
    </>
}