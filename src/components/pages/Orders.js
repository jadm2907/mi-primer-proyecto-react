import React, { useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';

const Orders = () => {
  const { orders } = useContext(OrderContext);

  return (
    <div>
      <h1>Mis Pedidos</h1>
      {orders.length === 0 ? (
        <p>No tienes pedidos.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <h2>Pedido #{order.id}</h2>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.price} €
                  </li>
                ))}
              </ul>
              <p>Total: {order.total} €</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;