import React, { createContext, Fragment, useState } from 'react'

export const CartContext = createContext();

export default function ContextProvider({children}) {
    const [carrito, setCarrito] = useState([{id: 1, name: "example"}]);

    const addItem = (products) => [...carrito, products];

    const removeItem = (id) => {
        setCarrito([carrito.filter((name) => name.id !== id)]);
    }

    const clear = () => {
        setCarrito([]);
    }

    return(
        <Fragment>
            <CartContext.Provider value={{carrito, setCarrito, addItem, removeItem, clear}}>
                {children}
            </CartContext.Provider>
        </Fragment>
    );
}