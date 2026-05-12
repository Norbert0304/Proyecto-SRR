import { createContext, useState, useEffect } from "react"; // 1. Import limpio

export const OrderContext = createContext();

function OrderProvider({ children }) {
  // Intentamos cargar desde localStorage al iniciar
  const initialOrders = JSON.parse(localStorage.getItem("orders")) || [
    {
      id: 1,
      origin: "Bogotá",
      destination: "Medellín",
      client: "Carlos Pérez",
      description: "Paquete electrónico",
      status: "Pendiente",
    },
    {
      id: 2,
      origin: "Cali",
      destination: "Barranquilla",
      client: "Ana Torres",
      description: "Documentos importantes",
      status: "En tránsito",
    },
  ];

  const [orders, setOrders] = useState(initialOrders);

  // 2. El useEffect va AQUÍ, dentro de la función
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (newOrder) => {
    const order = {
      id: orders.length + 1,
      ...newOrder,
      status: ["Pendiente", "En tránsito", "Entregado"][
        Math.floor(Math.random() * 3)
      ],
    };

    setOrders([...orders, order]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;