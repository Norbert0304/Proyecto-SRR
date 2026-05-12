import { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";

function Tracking() {

    const { orders } = useContext(OrderContext);
    const [filter, setFilter] = useState("Todos");

    const filteredOrders =
  filter === "Todos"
    ? orders
    : orders.filter(
        (order) => order.status === filter
      );

      const getBadgeClass = (status) => {

  switch (status) {

    case "Pendiente":
      return "bg-warning text-dark";

    case "En tránsito":
      return "bg-primary";

    case "Entregado":
      return "bg-success";

    default:
      return "bg-secondary";
  }
};
  return (
    <div className="container mt-5">

      <h1 className="mb-4">
        Tracking de Pedidos
      </h1>

      <div className="d-flex gap-2 mb-4">

    <button
        className="btn btn-outline-dark"
        onClick={() => setFilter("Todos")}
    >
        Todos
    </button>

    <button
        className="btn btn-outline-warning"
        onClick={() => setFilter("Pendiente")}
    >
        Pendientes
    </button>

    <button
        className="btn btn-outline-primary"
        onClick={() => setFilter("En tránsito")}
    >
        En tránsito
    </button>

    <button
        className="btn btn-outline-success"
        onClick={() => setFilter("Entregado")}
    >
        Entregados
    </button>

    </div>

      <div className="row">

        {filteredOrders.map((order) => (

          <div
            key={order.id}
            className="col-md-6 mb-4"
          >

            <div className="card shadow p-3">

              <h5>
                Pedido #{order.id}
              </h5>

              <p>
                <strong>Cliente:</strong> {order.client}
              </p>

              <p>
                <strong>Origen:</strong> {order.origin}
              </p>

              <p>
                <strong>Destino:</strong> {order.destination}
              </p>

              <p>
                <strong>Descripción:</strong> {order.description}
              </p>

              <p>
                <strong>Estado:</strong>

                <span
                    className={`badge ms-2 ${getBadgeClass(order.status)}`}
                >
                    {order.status}
                </span>

             </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Tracking;