import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './CartItem'; // Убедитесь, что путь правильный
import './cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, getTotal } = useContext(ShopContext); 
  const totalAmount = getTotal();  // Получаем общую сумму
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <h1>Your Cart Items</h1>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />; // Передаем данные в CartItem
          }
          return null;
        })}
      </div>
      {totalAmount > 0?
      <div className="checkout">
        <p>Subtotal: ${totalAmount.toFixed(2)}</p> {/* Округляем до двух знаков */}
        <button onClick={()=>{ navigate("/")}}>Continue Shopping</button>
        <button>Checkout</button>
      </div>:<h1>Your cart is Empty</h1>}
    </div>
  );
};
