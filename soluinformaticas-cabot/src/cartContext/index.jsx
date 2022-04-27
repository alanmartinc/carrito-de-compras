import React, { createContext, Fragment, useState } from "react";

export const CartContext = createContext();

export default function ContextProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const addItem = (product) => {
    const productIndex = carrito.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      if (carrito.length === 0) {
        setCarrito([product]);
      } else {
        setCarrito([...carrito, product]);
      }
    } else {
      const newCarrito = [...carrito];
      newCarrito[productIndex].quantity = newCarrito[productIndex].quantity + product.quantity;
      setCarrito(newCarrito);
    }
  };

  const removeItem = (id) => {
    setCarrito(carrito.filter((name) => name.id !== id));
  };

  const clear = () => {
    setCarrito([]);
  };

  return (
    <Fragment>
      <CartContext.Provider value={{ carrito, addItem, removeItem, clear }}>
        {children}
      </CartContext.Provider>
    </Fragment>
  );
}
