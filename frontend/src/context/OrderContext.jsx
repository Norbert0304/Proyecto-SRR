import { createContext, useState } from "react";

export const OrderContext = createContext();

function OrderProvider({ children }) {

	const [orders, setOrders] = useState([
		{
			id: '#A1201',
			origen: 'Usaquén',
			destino: 'Suba',
			estado: 'En Tránsito',
			color: 'primary',
			repartidor: 'Norbert L.',
			fecha: '26/04/2026 09:00'
		},

		{
			id: '#A1202',
			origen: 'Chapinero',
			destino: 'Fontibón',
			estado: 'En Tránsito',
			color: 'primary',
			repartidor: 'Karen J.',
			fecha: '26/04/2026 19:00'
		},

		{
			id: '#A1203',
			origen: 'San Cristóbal',
			destino: 'Engativá',
			estado: 'Entregado',
			color: 'success',
			repartidor: 'Norbert L.',
			fecha: '26/04/2026 17:00'
		},

		{
			id: '#A1204',
			origen: 'Usme',
			destino: 'Bosa',
			estado: 'En Tránsito',
			color: 'primary',
			repartidor: 'Juan M.',
			fecha: '26/04/2026 07:00'
		},

		{
			id: '#A1205',
			origen: 'Tunjuelito',
			destino: 'Kennedy',
			estado: 'Pendiente',
			color: 'warning',
			repartidor: '----------',
			fecha: '26/04/2026 08:00'
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