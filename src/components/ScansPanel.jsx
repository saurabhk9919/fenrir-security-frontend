import { FiColumns, FiFilter, FiSearch } from "react-icons/fi";
import useScanFilters from "../hooks/useScanFilters";

function StatusChip({ status }) {
  const styleMap = {
    Completed: "bg-emerald-100 text-emerald-600",
    Scheduled: "bg-slate-100 text-slate-500",
    Failed: "bg-red-100 text-red-500",
  };

  return (
    <span
      className={`rounded-md px-2 py-1 text-[10px] font-semibold 
      ${styleMap[status] || "bg-slate-100 text-slate-500"}`}>
      {status}
    </span>
  );
}
function VulnerabilityBadges({ data }) {
  return (
      <div className="flex items-center gap-2">
      <span className="rounded bg-red-500 px-2 py-1 text-[10px] font-semibold text-white">{data.critical}</span>
      <span className="rounded bg-orange-500 px-2 py-1 text-[10px] font-semibold text-white">{data.high}</span>
      <span className="rounded bg-yellow-500 px-2 py-1 text-[10px] font-semibold text-white">{data.medium}</span>
      <span className="rounded bg-green-500 px-2 py-1 text-[10px] font-semibold text-white">{data.low}</span>
    </div>
  );
}
function ProgressBar({ value }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-[68px] overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-primary" style={{ width: `${value}%` }} />
      </div>
      <span className="text-[11px] font-semibold text-slate-600">{value}%</span>
    </div>
  );
}
function ScansPanel({ scans, onNewScan }) {
  const {
    searchQuery,setSearchQuery,
    showFilters,setShowFilters,
    statusFilter,setStatusFilter,
    typeFilter,setTypeFilter,
    statusOptions,typeOptions,filteredScans,clearFilters,
  } = useScanFilters(scans);

  return (
    <div className="rounded-xl border border-slate-200">
      <div className="flex items-center justify-between border-b border-slate-200 p-4">
        <div className="relative w-2/3">
          <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search scans by name or type..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none
             placeholder:text-slate-400 focus:border-slate-300" />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowFilters((previous) => !previous)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-500"
          >
            <FiFilter />
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-500">
            <FiColumns />
            Column
          </button>
          <button
            type="button"
            onClick={onNewScan}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white" >
            + New scan
          </button>
      </div>
      </div>
      {showFilters && (
        <div className="grid grid-cols-3 gap-3 border-b border-slate-200 bg-slate-50 p-4">
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 outline-none focus:border-slate-300" >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                Status: {option}
              </option>
            ))}
          </select>
          <select
            value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 outline-none focus:border-slate-300">
            {typeOptions.map((option) => ( <option key={option} value={option}>
                Type: {option}
              </option>
            ))}
          </select>
       <button
            type="button"
            onClick={clearFilters}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600">
            Clear filters
          </button>
        </div>
      )}
      <div className="max-h-[420px] overflow-auto">
        <table className="w-full text-left text-sm">
        <thead className="sticky top-0 bg-white text-xs text-slate-400">
            <tr className="border-b border-slate-200">
              <th className="px-4 py-3 font-medium">Scan Name</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Progress</th>
              <th className="px-4 py-3 font-medium">Vulnerability</th>
              <th className="px-4 py-3 font-medium text-right">Last Scan</th>
            </tr>
           </thead>
            <tbody>
            {filteredScans.length > 0 ? (
              filteredScans.map((scan) => (
                <tr key={scan.id} className="border-b border-slate-100 text-[13px]">
                  <td className="px-4 py-3 text-slate-700">{scan.name}</td>
                  <td className="px-4 py-3 text-slate-600">{scan.type}</td>
                  <td className="px-4 py-3"><StatusChip status={scan.status} /></td>
                  <td className="px-4 py-3"><ProgressBar value={scan.progress} /></td>
                  <td className="px-4 py-3"><VulnerabilityBadges data={scan.vulnerabilities} /></td>
                  <td className="px-4 py-3 text-right text-slate-500">{scan.lastScan}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-sm text-slate-500">
                  No scans found for the current search and filters.
                </td>
              </tr>
            )}
            </tbody>
           </table>
      </div>
      </div> );}
export default ScansPanel;
