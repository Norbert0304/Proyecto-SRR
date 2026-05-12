import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateOrder from "./pages/CreateOrder";
import Tracking from "./pages/Tracking";
import Repartor from "./pages/Repartor";
import Rute from "./pages/Rute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/create-order" element={<CreateOrder />} />

        <Route path="/tracking" element={<Tracking />} />
		
		<Route path="/repartor" element={<Repartor />} />
		
		<Route path="/rute" element={<Rute />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;