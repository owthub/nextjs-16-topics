import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function BarCart(){

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const barData = {
        labels: [
           'Employee 1',
           'Employee 2',
           'Employee 3',
           'Employee 4',
           'Employee 5'
        ],
        datasets: [
        {
            label: "Employees Vs Salaries",
            data: [
               12000,
               14500,
               23000,
               17000,
               24500 
            ],
            backgroundColor: [
                'orange',
                'yellow',
                'cyan',
                'green',
                'blue'
            ],
            borderRadius: 6,
        },
        ],
    };

    return <>
      <h2>Welcome To BarChart</h2>

      <div className="flex flex-col items-center pt-20">
            <h3 className="text-2xl font-semibold mb-6">My Page</h3>
            <div className="w-full max-w-4xl">
                <div style={{ width: "100%", height: 380 }}>
                 <Bar data={barData} options={barOptions} />
                </div>
            </div>
        </div>
    </>
}