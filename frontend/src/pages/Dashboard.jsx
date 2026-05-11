import MainLayout from "../layouts/MainLayout";

function Dashboard() {
  return (
    <MainLayout>

      <h1 className="mb-4">
        Dashboard Principal
      </h1>

      <div className="row">

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Pedidos Activos</h5>
            <h2>24</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Pedidos Entregados</h5>
            <h2>120</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Repartidores Activos</h5>
            <h2>8</h2>
          </div>
        </div>

      </div>

    </MainLayout>
  );
}

export default Dashboard;