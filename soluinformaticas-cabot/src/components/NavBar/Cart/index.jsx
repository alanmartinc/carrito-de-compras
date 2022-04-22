import React, { Fragment, useContext } from "react";
import { CartContext } from "../../../cartContext";

export default function Cart() {
    let {carrito} = useContext(CartContext);
    
    return (
        <Fragment>
            <img src="assets/ecommerce.png" alt="Icon" className="w-8 inline" />
            {carrito.length}
        </Fragment>
    );
}