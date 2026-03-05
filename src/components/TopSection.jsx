import { FiClock, FiHome } from "react-icons/fi";

function TopSection({ summaryItems, onNewScan, onExportReport, onStopScan }) {
  return (
    <>
      <div className="flex flex-col gap-2 sm:gap-3 border-b border-slate-200 px-2 xs:px-3 sm:px-4 py-2 sm:py-3 dark:border-slate-700 md:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 overflow-x-auto hide-scrollbar min-w-0">
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
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            type="button" onClick={onExportReport}
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg border border-slate-200 bg-white px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-300 whitespace-nowrap" >
            Export Report
          </button>
          <button type="button" onClick={onStopScan}
            className="rounded-lg border border-red-200 bg-red-100 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-red-500 dark:border-red-900 dark:bg-red-950 dark:text-red-400 whitespace-nowrap"
          >
            Stop Scan
          </button>
        </div>
      </div>
      <div className="border-b border-slate-200 px-3 sm:px-4 py-3 sm:py-4 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400 md:px-6 overflow-x-auto">
        <div className="grid grid-cols-1 gap-1.5 sm:gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 xl:gap-4">
          {summaryItems.map((item) => (
            <p key={item.label} className="text-xs sm:text-sm whitespace-nowrap">
              <span className="hidden sm:inline">{item.label}: </span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">{item.value}</span>
            </p>
          ))}
          <p className="flex items-center gap-1">
            <FiClock className="text-teal-500 text-xs" />
            <span className="hidden sm:inline">10 mins ago</span>
            <span className="sm:hidden">10m</span>
          </p>
     </div>
      </div>
    </>
  );
}
export default TopSection;
