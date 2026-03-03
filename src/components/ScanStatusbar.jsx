function ScanStatusBar({ scanStatus }) {
  return (
    <div className="border-t border-slate-200 px-6 py-3">
      <div className="flex items-center justify-between text-xs">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            <span className="text-slate-500">Sub-Agents:</span>
            <span className="font-semibold text-slate-700">{scanStatus.subAgents}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-500"></span>
            <span className="text-slate-500">Parallel Executions:</span>
            <span className="font-semibold text-slate-700">{scanStatus.parallelExecutions}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-500"></span>
            <span className="text-slate-500">Operations:</span>
            <span className="font-semibold text-slate-700">{scanStatus.operations}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Critical:</span>
            <span className="font-semibold text-red-500">{scanStatus.severityCounts.critical}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">High:</span>
            <span className="font-semibold text-orange-500">{scanStatus.severityCounts.high}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Medium:</span>
            <span className="font-semibold text-yellow-500">{scanStatus.severityCounts.medium}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Low:</span>
            <span className="font-semibold text-green-500">{scanStatus.severityCounts.low}</span>
          </div>
     </div>
      </div>
    </div>
  );}
export default ScanStatusBar;
