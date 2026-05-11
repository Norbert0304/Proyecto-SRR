import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <ul>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/pedidos">Pedidos</Link>
        </li>

        <li>
          <Link to="/repartidores">Repartidores</Link>
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;