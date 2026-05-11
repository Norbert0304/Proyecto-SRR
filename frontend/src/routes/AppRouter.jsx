import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Pedidos from "../pages/Pedidos";
import Repartidores from "../pages/Repartidores";
import PedidoDetalle from "../pages/PedidoDetalle";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/pedidos" element={<Pedidos />} />

        <Route path="/repartidores" element={<Repartidores />} />

        <Route path="/pedido/:id" element={<PedidoDetalle />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;