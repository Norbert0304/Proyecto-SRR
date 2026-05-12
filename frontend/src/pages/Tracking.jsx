import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

function Tracking() {

    const { orders } = useContext(OrderContext);
  return (
    <div className="container mt-5">

      <h1 className="mb-4">
        Tracking de Pedidos
      </h1>

      <div className="row">

        {orders.map((order) => (

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
                <strong>Estado:</strong> {order.status}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Tracking;