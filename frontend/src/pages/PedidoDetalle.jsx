import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function PedidoDetalle() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalle del Pedido</h1>
      <p>ID del pedido: {id}</p>
    </div>
  );
}

export default PedidoDetalle;