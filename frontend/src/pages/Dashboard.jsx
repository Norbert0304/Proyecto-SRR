import { Link } from "react-router-dom";

function Dashboard() {

  return (
    <div className="container mt-5">

      <h1 className="mb-4">
        Dashboard
      </h1>

      <p>
        Bienvenido al sistema SSPR
      </p>

      <div className="d-flex gap-3 mt-4">

        <Link
          to="/create-order"
          className="btn btn-primary"
        >
          Crear Pedido
        </Link>

        <Link
          to="/tracking"
          className="btn btn-success"
        >
          Ver Tracking
        </Link>

      </div>

    </div>
  );
}

export default Dashboard;