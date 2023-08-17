import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["前端", "後端", "UI/UX", "設計思考", "商業能力"],
  datasets: [
    {
      label: "Abilities",
      data: [8, 2, 4, 8, 6],
      backgroundColor: tailwindConfig().theme.colors.orange[500],
      borderColor: tailwindConfig().theme.colors.orange[500],
      borderWidth: 1
    }
  ]
};

function Abilities() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Abilities
        </h2>
      </header>
      <Radar data={chartData} />
    </div>
  );
}

export default Abilities;
