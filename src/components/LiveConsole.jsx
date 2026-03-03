import { useState } from "react";


function Console({ activityLogs }) {
  const [activeTab, setActiveTab] = useState("activity");

  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white">

      {/* header */}
      <div className="flex items-center gap-1 border-b border-slate-200 px-4 py-3">
        <div className="mr-2 flex h-2 w-2 items-center">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
        </div>
        <span className="text-sm font-semibold text-slate-700">Live Scan Console</span>
        <div className="ml-6 flex gap-2">
          <button onClick={() => setActiveTab("activity")}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium ${
              activeTab === "activity" ? "bg-teal-50 text-teal-700"
                : "text-slate-500 hover:bg-slate-50"  }`}>
           Activity Log </button>
          <button onClick={() => setActiveTab("verification")} className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium ${
              activeTab === "verification"
                ? "bg-teal-50 text-teal-700"
                : "text-slate-500 hover:bg-slate-50"}`}><span className="ml-1">Verification Loops</span>
          </button>
        </div>
        
      </div>
{/* console */}
      <div className="max-h-[800px] overflow-y-auto bg-slate-50 p-4 font-mono text-sm">
        {activeTab === "activity" && (
        <div className="space-y-2">
            {activityLogs.map((log) => (
              <div key={log.id} className="flex gap-3 text-slate-700">
                <span className="text-slate-400">[{log.timestamp}]</span>
                <div className="flex-1">
                  <span>{log.message}</span>
                  {log.highlight && (
                    <span className="text-teal-600">{log.highlight}</span>
                  )}
                  {log.suffix && <span>{log.suffix}</span>}
                  {log.highlight2 && (
                    <span className="rounded bg-slate-800 px-1 text-white">
                      {log.highlight2}
                    </span>
                  )}
                  {log.suffix2 && <span>{log.suffix2}</span>}
                  {log.details && (
                    <pre className="mt-1 whitespace-pre-wrap text-slate-600">
                      {log.details}
                    </pre>)}
             </div>
              </div>
            ))}
          </div>
        )}
{activeTab === "verification" && (
          <div className="text-center text-slate-400 py-8">
            No verification loops running
          </div>
        )}
</div>
    </div>
  );}
export default Console;
