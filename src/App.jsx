import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ScanPage from "./pages/scanpage";
import { ThemeProvider } from "./hooks/useTheme";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/Signup" element={<Signup />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/scan" element={<ScanPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;