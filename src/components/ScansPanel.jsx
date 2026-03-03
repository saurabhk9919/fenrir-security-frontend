import { FiColumns, FiFilter, FiSearch } from "react-icons/fi";
import useScanFilters from "../hooks/useScanFilters";

function StatusChip({ status }) {
  const styleMap = {
    Completed: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",
    Scheduled: "bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400",
    Failed: "bg-red-100 text-red-500 dark:bg-red-950/40 dark:text-red-400",
  };
  return (
    <span
      className={`rounded-md px-2 py-1 text-[10px] font-semibold 
      ${styleMap[status] || "bg-slate-100 text-slate-500"}`}>
      {status}
    </span>
  );
}
function VulnerabilityBadges({ data, status }) {
  if (status === "Scheduled") {
    return (
      <div className="flex items-center justify-center gap-2">
        <span className="rounded bg-orange-500 px-2 py-1 text-[10px] font-semibold text-white">{data.high}</span>
        <span className="rounded bg-yellow-500 px-2 py-1 text-[10px] font-semibold text-white">{data.medium}</span>
      </div>
    );
  }

  return (
      <div className="flex items-center justify-center gap-2">
      <span className="rounded bg-red-500 px-2 py-1 text-[10px] font-semibold text-white">{data.critical}</span>
      <span className="rounded bg-orange-500 px-2 py-1 text-[10px] font-semibold text-white">{data.high}</span>
      <span className="rounded bg-yellow-500 px-2 py-1 text-[10px] font-semibold text-white">{data.medium}</span>
      <span className="rounded bg-green-500 px-2 py-1 text-[10px] font-semibold text-white">{data.low}</span>
    </div>
  );
}
function ProgressBar({ value, status }) {
  const progressColor = status === "Failed" ? "bg-red-500" : "bg-primary";

  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-[68px] overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div className={`h-full rounded-full ${progressColor}`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">{value}%</span>
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
    <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/50">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-4 dark:border-slate-700 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:w-2/3">
          <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search scans by name or type..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none dark:border-slate-600 dark:bg-slate-700/60 dark:text-white dark:placeholder-slate-500 focus:border-slate-300 dark:focus:border-slate-500 placeholder:text-slate-400" />
        </div>
        <div className="flex w-full flex-wrap items-center gap-2 lg:w-auto lg:justify-end">
          <button
            type="button"
            onClick={() => setShowFilters((previous) => !previous)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-400"
          >
            <FiFilter />
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-400">
            <FiColumns />
            Column
          </button>
          <button
            type="button"
            onClick={onNewScan}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white dark:bg-teal-600" >
            + New scan
          </button>
      </div>
      </div>
      {showFilters && (
        <div className="grid grid-cols-1 gap-3 border-b border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-700/40 sm:grid-cols-3">
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 outline-none dark:border-slate-600 dark:bg-slate-700/60 dark:text-slate-300 focus:border-slate-300 dark:focus:border-slate-500" >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                Status: {option}
              </option>
            ))}
          </select>
          <select
            value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 outline-none dark:border-slate-600 dark:bg-slate-700/60 dark:text-slate-300 focus:border-slate-300 dark:focus:border-slate-500" >
            {typeOptions.map((option) => ( <option key={option} value={option}>
                Type: {option}
              </option>
            ))}
          </select>
       <button
            type="button"
            onClick={clearFilters}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Clear filters
          </button>
        </div>
      )}
      <div className="max-h-[420px] overflow-auto hide-scrollbar">
        <table className="min-w-[760px] w-full text-left text-sm">
        <thead className="sticky top-0 bg-white text-xs text-slate-400 dark:bg-slate-700 dark:text-slate-500">
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="px-4 py-3 font-medium dark:text-slate-400">Scan Name</th>
              <th className="px-4 py-3 font-medium dark:text-slate-400">Type</th>
              <th className="px-4 py-3 font-medium dark:text-slate-400">Status</th>
              <th className="px-4 py-3 font-medium dark:text-slate-400">Progress</th>
              <th className="px-4 py-3 font-medium dark:text-slate-400">Vulnerability</th>
              <th className="px-4 py-3 font-medium text-right dark:text-slate-400">Last Scan</th>
            </tr>
           </thead>
            <tbody>
            {filteredScans.length > 0 ? (
              filteredScans.map((scan) => (
                <tr key={scan.id} className="border-b border-slate-100 text-[13px] dark:border-slate-700">
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{scan.name}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{scan.type}</td>
                  <td className="px-4 py-3"><StatusChip status={scan.status} /></td>
                  <td className="px-4 py-3"><ProgressBar value={scan.progress} status={scan.status} /></td>
                  <td className="px-4 py-3 text-center"><VulnerabilityBadges data={scan.vulnerabilities} status={scan.status} /></td>
                  <td className="px-4 py-3 text-right text-slate-500 dark:text-slate-400">{scan.lastScan}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                  No scans found for the current search and filters.
                </td>
              </tr>
            )}
            </tbody>
           </table>
      </div>
      </div> );}
export default ScansPanel;
