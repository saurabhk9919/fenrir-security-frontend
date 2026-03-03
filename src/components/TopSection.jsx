import { FiClock, FiHome } from "react-icons/fi";

function TopSection({ summaryItems, onNewScan, onExportReport, onStopScan }) {
  return (
    <>
      <div className="flex flex-col gap-3 border-b border-slate-200 px-4 py-3 dark:border-slate-700 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300"> Scan
            <FiHome className="ml-1 inline-block" />
          </span>
          <span className="mx-2">/</span>
          <span>Private Assets</span>
          <span className="mx-2">/</span>
          <button
            type="button" onClick={onNewScan} className="text-primary font-medium hover:underline">  
            New Scan
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button" onClick={onExportReport}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-300" >
            Export Report
          </button>
          <button type="button"onClick={onStopScan}
            className="rounded-lg border border-red-200 bg-red-100 px-4 py-2 text-sm font-medium text-red-500 dark:border-red-900 dark:bg-red-950 dark:text-red-400"
          >
            Stop Scan
          </button>
        </div>
      </div>
      <div className="border-b border-slate-200 px-4 py-4 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400 sm:px-6">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 xl:gap-4">
          {summaryItems.map((item) => (
            <p key={item.label}>
              {item.label}: <span className="font-semibold text-slate-700 dark:text-slate-300">{item.value}</span>
            </p>
          ))}
          <p className="flex items-center justify-end gap-1 text-right">
            <FiClock className="text-teal-500" />
            10 mins ago
          </p>
     </div>
      </div>
    </>
  );
}
export default TopSection;
