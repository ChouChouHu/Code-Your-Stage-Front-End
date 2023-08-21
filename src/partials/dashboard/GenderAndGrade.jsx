import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
// Import utilities
import { tailwindConfig } from "../../utils/Utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart"
    }
  }
};

const labels = ["大一", "大二", "大三", "大四", "研一", "研二"];

const data = {
  labels,
  datasets: [
    {
      label: "Barbie",
      data: [1, 5, 2, 3, 8, 3],
      backgroundColor: tailwindConfig().theme.colors.orange[300]
    },
    {
      label: "Ken",
      data: [3, 1, 4, 5, 2, 2],
      backgroundColor: tailwindConfig().theme.colors.blue[300]
    }
  ]
};

function GenderAndGrade() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Gender & Grade
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      <div className="px-8 pb-4">
        <Bar options={options} data={data} height={240} />
      </div>
    </div>
  );
}

export default GenderAndGrade;
