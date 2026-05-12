import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
// ... tus otros imports

function App() {
  return (
    <BrowserRouter>
      <Layout> {/* <--- Esto envuelve TODO y pone la Navbar/Sidebar fija */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/tracking" element={<Tracking />} />
          {/* Si quieres que el Login no tenga Navbar, muévelo fuera del Layout */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
