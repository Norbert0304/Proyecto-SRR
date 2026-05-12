import { createContext, useState } from "react";

export const OrderContext = createContext();

function OrderProvider({ children }) {

  const [orders, setOrders] = useState([
    {
      id: 1,
      origin: "Bogotá",
      destination: "Medellín",
      client: "Carlos Pérez",
      description: "Paquete electrónico",
      status: "Pendiente"
    },

    {
      id: 2,
      origin: "Cali",
      destination: "Barranquilla",
      client: "Ana Torres",
      description: "Documentos importantes",
      status: "En tránsito"
    }
  ]);

  const addOrder = (newOrder) => {

    const order = {
      id: orders.length + 1,
      ...newOrder,
      status: "Pendiente"
    };

    setOrders([...orders, order]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;