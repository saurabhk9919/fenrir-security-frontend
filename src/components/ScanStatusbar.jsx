function ScanStatusBar({ scanStatus }) {
  return (
    <div className="border-t border-slate-200 px-3 sm:px-4 py-2 sm:py-3 dark:border-slate-700 md:px-6">
      <div className="flex flex-col gap-2 sm:gap-3 text-xs lg:flex-row lg:items-center lg:justify-between dark:text-slate-300 overflow-x-auto">
        <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6">
          <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500"></span>
            <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">Sub-Agents:</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{scanStatus.subAgents}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-500"></span>
            <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">Parallel:</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{scanStatus.parallelExecutions}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal-500"></span>
            <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">Ops:</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{scanStatus.operations}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 md:gap-4">
          <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <span className="text-red-500 font-medium dark:text-red-400 text-xs sm:text-sm">Critical:</span>
            <span className="font-semibold text-red-500 dark:text-red-400 text-xs sm:text-sm">{scanStatus.severityCounts.critical}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <span className="text-orange-500 font-medium dark:text-orange-400 text-xs sm:text-sm">High:</span>
            <span className="font-semibold text-orange-500 dark:text-orange-400 text-xs sm:text-sm">{scanStatus.severityCounts.high}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <span className="text-yellow-500 font-medium dark:text-yellow-400 text-xs sm:text-sm">Medium:</span>
            <span className="font-semibold text-yellow-500 dark:text-yellow-400 text-xs sm:text-sm">{scanStatus.severityCounts.medium}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <span className="text-green-500 font-medium dark:text-green-400 text-xs sm:text-sm">Low:</span>
            <span className="font-semibold text-green-500 dark:text-green-400 text-xs sm:text-sm">{scanStatus.severityCounts.low}</span>
          </div>
     </div>
      </div>
    </div>
  );}
export default ScanStatusBar;
