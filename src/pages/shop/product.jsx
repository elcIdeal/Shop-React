import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);  // Извлекаем addToCart и cartItems из контекста
  const cartItemsAmount = cartItems[id] || 0;  // Получаем количество товара в корзине или 0, если товара нет

  return (
    <div className='product'>
      <img src={productImage} alt="" />
      <div className='description'> 
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add To Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
      </button>
    </div>
  );
};
