import { FiClock } from "react-icons/fi";

function FindingLog({ findingLogs }) {
  const severityStyles = {
    critical: {
      badge: "bg-red-500",
      border: "border-red-200 dark:border-red-900/50",
    },
    high: {
      badge: "bg-orange-500",
      border: "border-orange-200 dark:border-orange-900/50",
    },
    medium: {
      badge: "bg-yellow-500",
      border: "border-yellow-200 dark:border-yellow-900/50",
    },
    low: {
      badge: "bg-green-500",
      border: "border-green-200 dark:border-green-900/50",
    },
  };
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/50 w-full overflow-hidden">
      <div className="border-b border-slate-200 px-4 py-3 dark:border-slate-700">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Finding Log</span>
      </div>
      <div className="max-h-[600px] space-y-2 sm:space-y-3 overflow-y-auto p-3 sm:p-4">
        {findingLogs.map((finding) => {
          const styles = severityStyles[finding.severity];
          return (
            <div
              key={finding.id}
              className={`rounded-lg border ${styles.border} bg-white p-3 sm:p-4 shadow-sm dark:border-opacity-30 dark:bg-slate-700`}
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <span className={`rounded px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold uppercase text-white flex-shrink-0 ${styles.badge}`}>
                  {finding.severity}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-slate-400">
                  <FiClock className="text-xs" />
                  {finding.timestamp}
                </span>
              </div>

              <h3 className="mb-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                {finding.title}
              </h3>

              <div className="mb-2 rounded bg-teal-50 px-2 py-1 dark:bg-teal-900/30 overflow-x-auto">
                <code className="text-[10px] sm:text-xs text-teal-700 dark:text-teal-400 break-all">{finding.endpoint}</code>
              </div>

              <p className="text-[10px] sm:text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {finding.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FindingLog;
