import {FiCheckCircle,FiClock,FiFileText, FiMapPin,FiSearch,FiShield,
} from "react-icons/fi";
import { MdOutlineScience } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";

const stepIcons = {search: FiSearch,map: FiMapPin,flask: MdOutlineScience,
    check: FiCheckCircle,
  file: FiFileText,
};
function ScanProgressHeader({ scanProgress, scanSteps, scanMetadata }) {
  const { isDark } = useTheme();
  return (
    <>
      <div className="border-b border-slate-200 dark:border-slate-700 px-2 sm:px-3 md:px-4 py-3 sm:py-4 md:py-6 lg:px-6 overflow-x-auto hide-scrollbar">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 min-w-max md:min-w-full">

          {/* Circular progress */}
          <div className="flex justify-center md:justify-start flex-shrink-0">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 96 96" preserveAspectRatio="xMidYMid meet">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke={isDark ? "#334155" : "#e2e8f0"}
                  strokeWidth="6"
                  fill={scanProgress.percentage === 0 ? "none" : "none"}
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#0CC8A8"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - scanProgress.percentage / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-primary dark:text-teal-400">
                  {scanProgress.percentage}%
                </span>
                <span className="text-[8px] sm:text-[9px] text-slate-400 dark:text-slate-500">
                  {scanProgress.status}
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-20 sm:h-24 w-px bg-slate-200 dark:bg-slate-700 flex-shrink-0"></div>

          <div className="relative flex-1 flex items-center justify-between px-1 sm:px-2 min-w-0">
            <div className="absolute top-8 left-6 right-6 h-0.5 bg-slate-200 dark:bg-slate-700" />
            {scanSteps.map((step) => {
              const Icon = stepIcons[step.icon];
              return (
                <div
                  key={step.label}
                  className="relative flex flex-1 flex-col items-center">
                  <div className={`relative z-10 mb-2 grid h-12 w-12 place-items-center rounded-full transition-all ${
                    step.active
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : step.completed
                        ? "bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-400"
                        : "bg-slate-100 text-slate-400 dark:bg-slate-700 dark:text-slate-500"
                  }`}>
                    <Icon className="text-xl" />
                  </div>
                  <span className={`text-xs font-medium ${
                    step.active ? "text-slate-700 dark:text-slate-300" : "text-slate-400 dark:text-slate-500"
                  }`}>{step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 dark:border-slate-700 px-2 sm:px-3 md:px-4 py-3 sm:py-4 md:py-5 lg:px-6">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          <div>
            <p className="mb-0.5 sm:mb-1 text-slate-400 dark:text-slate-500 text-xs">Scan Type</p>
            <p className="font-semibold text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{scanMetadata.scanType}</p>
          </div>
          <div>
            <p className="mb-0.5 sm:mb-1 text-slate-400 dark:text-slate-500 text-xs">Targets</p>
            <p className="font-semibold text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{scanMetadata.targets}</p>
          </div>
          <div>
            <p className="mb-0.5 sm:mb-1 text-slate-400 dark:text-slate-500 text-xs">Started At</p>
            <p className="font-semibold text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{scanMetadata.startedAt}</p>
          </div>
          <div className="hidden sm:block">
            <p className="mb-0.5 sm:mb-1 text-slate-400 dark:text-slate-500 text-xs">Credentials</p>
            <p className="font-semibold text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{scanMetadata.credentials}</p>
          </div>
          <div className="hidden sm:block">
            <p className="mb-0.5 sm:mb-1 text-slate-400 dark:text-slate-500 text-xs">Files</p>
            <p className="font-semibold text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{scanMetadata.files}</p>
          </div>
          <div className="hidden lg:block">
            <p className="mb-0.5 sm:mb-1 text-slate-400 dark:text-slate-500 text-xs">Checklists</p>
            <p className="font-semibold text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{scanMetadata.checklists}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScanProgressHeader;
