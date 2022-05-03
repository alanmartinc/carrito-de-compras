import React, { createContext, Fragment, useState } from "react";

export const CartContext = createContext();

export default function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      if (cart.length === 0) {
        setCart([product]);
      } else {
        setCart([...cart, product]);
      }
    } else {
      const newCart = [...cart];
      newCart[productIndex].quantity =
        newCart[productIndex].quantity + product.quantity;
      setCart(newCart);
    }
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const removeItem = (id) => {
    setCart(cart.filter((name) => name.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <Fragment>
      <CartContext.Provider
        value={{ cart, addItem, removeItem, clear, isInCart }}
      >
        {children}
      </CartContext.Provider>
    </Fragment>
  );
}
