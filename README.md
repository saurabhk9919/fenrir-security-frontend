<h2>Fenrir Security – Frontend Design Challenge</h2>
</br>
This is a React-Based frontend implementation of a cybersecurity SaaS dashboard as part of the Frontend Engineer Technical Challenge for Fenrir Security.
</br>
The goal of this project is to recreate the UI design reference and implement a functional, responsive dashboard using modern frontend practices with dark and light themes.
</br>
</br>
<h4>Live Deployment:</h4>
The application is deployed using Vercel:
</br>
<a href="https://fenrir-security-frontend.vercel.app/" target="_blank">
https://fenrir-security-frontend.vercel.app/
</a>
</br>
</br>
<h3>Tech Stack:</h3>
. React(Vite)-Frontend framework
</br>
.Tailwind CSS – Styling and layout
</br>
.React Router DOM – Navigation and routing
</br>
.React Icons – Icon library
</br>
.JavaScript (ES6+)
</br>
</br>
<h3>Pages Included:</h3>
<h4>Login Page</h4>File: src/pages/login.jsx
</br></br>
<h4>Signup Page File:</h4>File: src/pages/signup.jsx
</br></br>
<h4>Sidebar Navigation:</h4>
</br>
A fixed sidebar is implemented on the left side of the dashboard to allow easy navigation across different sections of the application.
</br>
The sidebar includes navigation links for:
</br>
</br>
Dashboard
</br>
Projects
</br>
Scans
</br>
Schedule
</br>
Notifications
</br>
Settings
</br>
Support
</br>
</br>
The sidebar remains visible while the main content area updates based on the selected route using React Router.
</br>
<h4>Theme Toggle (Day / Night Mode):</h4>
A theme toggle button is provided to switch between light mode and dark mode.
</br>
</br>
<h4>Dashboard File:</h4>File: src/pages/dashboard.jsx
</br>
Displays organization-level security statistics:
</br>
Critical severity
</br>
High severity
</br>
Medium severity
</br>
Low severity
</br>
</br><h4>Scans Page:</h4>
File: src/pages/scanpage.jsx
</br>
Displays the vulnerabilities discovered during a security scan.
</br>
Severity level (Critical, High, Medium)
</br>
Timestamp of detection
</br>
Affected endpoint or API path
</br>
Short description of the issue
</br>
Findings are displayed as stacked cards with color-coded severity badges.
</br></br>
<h4>Running the Project Locally:</h4>
</br>
Clone the repository
</br>
git clone https://github.com/saurabhk9919/fenrir-security-frontend.git
</br>
</br>
Navigate to the project folder
</br>
cd fenrir-security-frontend
</br>
</br>
Install dependencies
</br>
npm install
</br>
</br>
Run the development server
</br>
npm run dev
</br>
</br>
The application will start at:
</br>
http://localhost:5173
</br>
</br>
<h4>Notes:</h4>
.Mock data is used to populate the dashboard components and scan table for demonstration purposes.
</br>
.The user interface has been implemented by closely following the design reference provided in the assessment.
</br>
.The project follows a component-based architecture to keep the code organized, reusable, and easy to extend.
