import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { OrderContext } from '../../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { placeOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const order = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0),
    };
    placeOrder(order);
    clearCart();
    toast.success('Pedido realizado con éxito'); // Notificación toast
    navigate('/orders');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} €
          </li>
        ))}
      </ul>
      <p>Total: {cart.reduce((sum, item) => sum + item.price, 0)} €</p>
      <button onClick={handlePlaceOrder}>Realizar Pedido</button>
    </div>
  );
};

export default Checkout;