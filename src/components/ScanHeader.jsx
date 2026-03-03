import {FiCheckCircle,FiClock,FiFileText, FiMapPin,FiSearch,FiShield,
} from "react-icons/fi";
import { MdOutlineScience } from "react-icons/md";

const stepIcons = {search: FiSearch,map: FiMapPin,flask: MdOutlineScience,
    check: FiCheckCircle,
  file: FiFileText,
};
function ScanProgressHeader({ scanProgress, scanSteps, scanMetadata }) {
  return (
    <>
      <div className="border-b border-slate-200 px-6 py-6">
        <div className="flex items-center gap-8">


          {/* Circular progress */}
          <div className="relative flex h-24 w-24 items-center justify-center">
            <svg className="h-full w-full -rotate-90 transform">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="#e2e8f0"
                strokeWidth="6"
                fill="none"
              />
             <circle cx="48"
                cy="48"
                r="40"
                stroke="#0CC8A8"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - scanProgress.percentage / 100)}`}
                strokeLinecap="round" />
             
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-slate-700">
                {scanProgress.percentage}%
              </span>
              <span className="text-[10px] text-slate-400">
                {scanProgress.status}
              </span>
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-between px-4">
           <div className="absolute top-6 left-12 right-12 h-0.5 bg-slate-200" />
             {scanSteps.map((step, index) => {
              const Icon = stepIcons[step.icon];
            return (
                <div
                  key={step.label}
                  className="relative flex flex-1 flex-col items-center">
                 <div className={`relative z-10 mb-2 grid h-12 w-12 place-items-center rounded-full transition-all ${
                      step.active
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : step.completed
                          ? "bg-teal-100 text-teal-600"
                          : "bg-slate-100 text-slate-400"}`}>
                     <Icon className="text-xl" />
                  </div>
                    <span  className={`text-xs font-medium ${
                      step.active ? "text-slate-700" : "text-slate-400"
                    }`}>{step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 px-6 py-4">
        <div className="grid grid-cols-6 gap-6 text-xs">
          <div>
            <p className="mb-1 text-slate-400">Scan Type</p>
            <p className="font-semibold text-slate-700">{scanMetadata.scanType}</p>
          </div>
          <div>
            <p className="mb-1 text-slate-400">Targets</p>
            <p className="font-semibold text-slate-700">{scanMetadata.targets}</p>
          </div>
          <div>
            <p className="mb-1 text-slate-400">Started At</p>
            <p className="font-semibold text-slate-700">{scanMetadata.startedAt}</p>
          </div>
          <div>
            <p className="mb-1 text-slate-400">Credentials</p>
            <p className="font-semibold text-slate-700">{scanMetadata.credentials}</p>
          </div>
          <div>
            <p className="mb-1 text-slate-400">Files</p>
            <p className="font-semibold text-slate-700">{scanMetadata.files}</p>
          </div>
          <div>
            <p className="mb-1 text-slate-400">Checklists</p>
            <p className="font-semibold text-slate-700">{scanMetadata.checklists}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScanProgressHeader;
