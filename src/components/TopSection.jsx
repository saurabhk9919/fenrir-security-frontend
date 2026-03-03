import { FiClock, FiHome } from "react-icons/fi";

function TopSection({ summaryItems, onNewScan, onExportReport, onStopScan }) {
  return (
    <>
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-3">
        <div className="text-sm text-slate-500">
          <span className="font-semibold text-slate-700"> Scan
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
        <div className="flex items-center gap-2">
          <button
            type="button" onClick={onExportReport}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700" >
            Export Report
          </button>
          <button type="button"onClick={onStopScan}
            className="rounded-lg border bg-red-200 border-red-200 px-4 py-2 text-sm font-medium text-red-500"
          >
            Stop Scan
          </button>
        </div>
      </div>
      <div className="border-b border-slate-200 px-6 py-4 text-xs text-slate-500">
        <div className="grid grid-cols-7 gap-4">
          {summaryItems.map((item) => (
            <p key={item.label}>
              {item.label}: <span className="font-semibold text-slate-700">{item.value}</span>
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
