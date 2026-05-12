import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateOrder from "./pages/CreateOrder";
import Tracking from "./pages/Tracking";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/create-order" element={<CreateOrder />} />

        <Route path="/tracking" element={<Tracking />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;