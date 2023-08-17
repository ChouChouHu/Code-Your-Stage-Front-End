import BarChart from "../../charts/BarChart01";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";

function GenderAndGrade() {
  const chartData = {
    labels: ["大一", "大二", "大三", "大四", "研一", "研二"],
    datasets: [
      // Light blue bars
      {
        label: "Boy",
        data: [1, 5, 2, 3, 8, 3],
        backgroundColor: tailwindConfig().theme.colors.orange[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.red[200],
        barPercentage: 0.66,
        categoryPercentage: 0.66
      },
      // Blue bars
      {
        label: "Girl",
        data: [3, 1, 4, 5, 2, 2],
        backgroundColor: tailwindConfig().theme.colors.orange[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.red[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66
      }
    ]
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Gender & Grade
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default GenderAndGrade;
