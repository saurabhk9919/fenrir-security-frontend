import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ScanPage from "./pages/scanpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/scan/:id" element={<ScanPage />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;