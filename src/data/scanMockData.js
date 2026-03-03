export const scanSteps = [
  { label: "Spidering", icon: "search", active: true, completed: false },
  { label: "Mapping", icon: "map", active: false, completed: false },
  { label: "Testing", icon: "flask", active: false, completed: false },
  { label: "Validating", icon: "check", active: false, completed: false },
  { label: "Reporting", icon: "file", active: false, completed: false },
];
export const scanMetadata = {
  scanType: "Grey Box",
  targets: "google.com",
  startedAt: "Nov 22, 09:00AM",
  credentials: "2 Active",
  files: "Control.pdf",
  checklists: "40/350",
};
export const activityLogs = [
  {
    id: 1,
    timestamp: "09:00:00",
    message: "I'll begin a systematic penetration test on ",
    highlight: "helpdesk.democorp.com",
    suffix: ". Let me start with reconnaissance and enumeration.",
  },
  {
    id: 2,
    timestamp: "09:01:00",
    message: "Good! target is online. Now let me perform port scanning to identify running services.",
  },
  {
    id: 3,
    timestamp: "09:02:00",
    message: "Excellent reconnaissance results:",
    details: "- helpdesk.democorp.com: Apache httpd 2.4.65 on port 88 (web server)\nLet me probe the web server to understand its structure.",
  },
  {
    id: 4,
    timestamp: "09:03:00",
    message: "Great! I can access the login page for a Help Desk Platform. I can see a useful comment: ",
    highlight: '"TODO: Delete the testing account {test:test}"',
    suffix: ". Let me test this credential. The login retrieves a ",
    highlight2: "password/test",
    suffix2: ". Let me follow that path and explore it.",
  },
  {
    id: 5,
    timestamp: "09:05:00",
    message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does – it means the current page. Let me try a different approach.",
  },
  {
    id: 6,
    timestamp: "09:05:00",
    message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other endpoints. Let me test ",
    highlight: "test-test",
    suffix: " password directly on other endpoints.",
  },
  {
    id: 7,
    timestamp: "09:06:00",
    message: "Great! I can access the dashboard using the ",
    highlight: '"X-UserId: 10032"',
    suffix: " header. The dashboard shows 'Welcome, John Doe'. This suggests an ",
    highlight2: "**IDOR vulnerability**",
    suffix2: " - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...",
  },
];

export const findingLogs = [
  {
    id: 1,
    severity: "critical",
    timestamp: "10:08:33",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
  },
  {
    id: 2,
    severity: "high",
    timestamp: "10:08:25",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
  },
  {
    id: 3,
    severity: "medium",
    timestamp: "10:08:25",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    description: "No effective rate limiting detected on login attempts. Automated brute-force attacks are possible.",
  },
];

export const scanStatus = {
  subAgents: 0,
  parallelExecutions: 2,
  operations: 1,
  severityCounts: {
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
  },
};
export const scanProgress = {
  percentage: 0,
  status: "In Progress",
};
