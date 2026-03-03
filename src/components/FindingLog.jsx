import { FiClock } from "react-icons/fi";

function FindingLog({ findingLogs }) {
  const severityStyles = {
    critical: {
      badge: "bg-red-500",
      border: "border-red-200",
    },
    high: {
      badge: "bg-orange-500",
      border: "border-orange-200",
    },
    medium: {
      badge: "bg-yellow-500",
      border: "border-yellow-200",
    },
    low: {
      badge: "bg-green-500",
      border: "border-green-200",
    },
  };
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-4 py-3">
        <span className="text-sm font-semibold text-slate-700">Finding Log</span>
      </div>
     <div className="max-h-[600px] space-y-3 overflow-y-auto p-4">
        {findingLogs.map((finding) => {
          const styles = severityStyles[finding.severity];
          return (
            <div
              key={finding.id}
              className={`rounded-lg border ${styles.border} bg-white p-4 shadow-sm`}>
              <div className="mb-2 flex items-start justify-between">
                  <span className={`rounded px-2 py-1 text-[10px] font-semibold uppercase text-white ${styles.badge}`}>
                  {finding.severity}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-slate-400">
                  <FiClock className="text-xs" />
                  {finding.timestamp}
                </span>
              </div>

              <h3 className="mb-2 text-sm font-semibold text-slate-700">
                {finding.title}
              </h3>

              <div className="mb-2 rounded bg-teal-50 px-2 py-1">
                <code className="text-xs text-teal-700">{finding.endpoint}</code>
              </div>

              <p className="text-xs leading-relaxed text-slate-600">
                {finding.description}
              </p>
            </div>
          );
        })}
         </div>
        </div>
  );}
export default FindingLog;
