function ScanStatusBar({ scanStatus }) {
  return (
    <div className="border-t border-slate-200 px-4 py-3 dark:border-slate-700 sm:px-6">
      <div className="flex flex-col gap-3 text-xs lg:flex-row lg:items-center lg:justify-between dark:text-slate-300">
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            <span className="text-slate-500 dark:text-slate-400">Sub-Agents:</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">{scanStatus.subAgents}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-500"></span>
            <span className="text-slate-500 dark:text-slate-400">Parallel Executions:</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">{scanStatus.parallelExecutions}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-500"></span>
            <span className="text-slate-500 dark:text-slate-400">Operations:</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">{scanStatus.operations}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-medium dark:text-red-400">Critical:</span>
            <span className="font-semibold text-red-500 dark:text-red-400">{scanStatus.severityCounts.critical}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-medium dark:text-orange-400">High:</span>
            <span className="font-semibold text-orange-500 dark:text-orange-400">{scanStatus.severityCounts.high}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-medium dark:text-yellow-400">Medium:</span>
            <span className="font-semibold text-yellow-500 dark:text-yellow-400">{scanStatus.severityCounts.medium}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-medium dark:text-green-400">Low:</span>
            <span className="font-semibold text-green-500 dark:text-green-400">{scanStatus.severityCounts.low}</span>
          </div>
     </div>
      </div>
    </div>
  );}
export default ScanStatusBar;
