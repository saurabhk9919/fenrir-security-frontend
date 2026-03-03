import { useState } from "react";
import { FiClock, FiX, FiChevronDown } from "react-icons/fi";

function Console({ activityLogs }) {
  const [activeTab, setActiveTab] = useState("activity");
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white">

      {/* header */}
      <div className="border-b border-slate-200">
        <div className="flex items-center gap-2 px-4 pt-3 pb-2">
          <div className="flex h-2 w-2 items-center">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
          </div>
          <span className="text-sm font-semibold text-slate-700">Live Scan Console</span>
          <div className="flex items-center gap-1.5 ml-auto">
            <div className="flex items-center gap-1.5 text-slate-400">
              <FiClock className="w-3.5 h-3.5" />
              <span className="text-xs">Running...</span>
            </div>
            <button className="ml-2 p-1 hover:bg-slate-100 rounded transition-colors">
              <FiChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-1 hover:bg-slate-100 rounded transition-colors">
              <FiX className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
        <div className="flex gap-8 px-4">
          <button 
            onClick={() => setActiveTab("activity")}
            className={`pb-2 text-sm font-medium transition-colors relative ${
              activeTab === "activity" 
                ? "text-primary" 
                : "text-slate-500 hover:text-slate-700"
            }`}>
            Activity Log
            {activeTab === "activity" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </button>
          <button 
            onClick={() => setActiveTab("verification")} 
            className={`pb-2 text-sm font-medium transition-colors relative ${
              activeTab === "verification"
                ? "text-primary"
                : "text-slate-500 hover:text-slate-700"}`}>
            Verification Loops
            {activeTab === "verification" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div> )}
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
                    log.highlight2.includes("**") ? (
                      <span className="text-red-500 font-semibold">
                        {log.highlight2}
                      </span>
                    ) : (<span className="rounded bg-slate-800 px-1 text-white">
                        {log.highlight2} </span>
                    ))}
                  {log.suffix2 && <span>{log.suffix2}</span>}
                  {log.details && (
                    <pre className="mt-1 whitespace-pre-wrap text-slate-600">
                      {log.details}
                    </pre>)}
             </div>
              </div>))}
          </div>
        )}
        {activeTab === "verification" && (
          <div className="text-center text-slate-400 py-8">
            No verification loops running
          </div>
        )}
        {activeTab === "finding" && (
          <div className="text-center text-slate-400 py-8">
            No findings yet
          </div> )}
</div>
    </div>
  );}
export default Console;
