import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, update } =
    useContext(ShopContext); // Извлекаем cartItems из контекста
  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0) {
      update(value, id);
    }
  };

  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={handleInputChange} min="0" />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
