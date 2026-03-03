export const stats = [
  {
    title: "Critical Severity",
    value: "86",
    change: "+2% increase than yesterday",
    iconKey: "critical",
    trend: "text-red-500",
  },
  {
    title: "High Severity",
    value: "16",
    change: "+0.9% increase than yesterday",
    iconKey: "high",
    trend: "text-red-500",
  },
  {
    title: "Medium Severity",
    value: "26",
    change: "+0.9% decrease than yesterday",
    iconKey: "medium",
    trend: "text-green-600",
  },
  {
    title: "Low Severity",
    value: "16",
    change: "+0.9% increase than yesterday",
    iconKey: "low",
    trend: "text-red-500",
  },
];

export const scans = [
  ...Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: "Web App Servers",
    type: "Greybox",
    status: index > 5 ? "Scheduled" : "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  })),
  {
    id: 9,
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 20,
    vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
    lastScan: "3d ago",
  },
  {
    id: 10,
    name: "Temp Data",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
    lastScan: "3d ago",
  },
];

export const navPrimary = [
  { label: "Dashboard", iconKey: "dashboard", active: true },
  { label: "Projects", iconKey: "projects", active: false },
  { label: "Scans", iconKey: "scans", active: false },
  { label: "Schedule", iconKey: "schedule", active: false },
];

export const navSecondary = [
  { label: "Notifications", iconKey: "notifications" },
  { label: "Settings", iconKey: "settings" },
  { label: "Support", iconKey: "support" },
];
export const summaryItems = [
  { label: "Org", value: "Project X" },
  { label: "Owner", value: "Saurabh" },
  { label: "Total Scans", value: "100" },
  { label: "Scheduled", value: "1000" },
  { label: "Rescans", value: "100" },
  { label: "Failed Scans", value: "100" },
];
