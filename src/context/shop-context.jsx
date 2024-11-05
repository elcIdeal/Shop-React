import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotal = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = PRODUCTS.find((product) => product.id === Number(item));
                total += cartItems[item] * iteminfo.price;
            }
        }
        return total; // Добавляем return для возврата значения
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const update = (newAmount, itemid) => {
        setCartItems((prev) => ({ ...prev, [itemid]: newAmount }));
    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        update,
        getTotal, // Добавляем getTotal в контекст
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
