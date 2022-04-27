import React, { Fragment, useContext } from "react";
import { CartContext } from "../../../cartContext";

export default function Cart() {
    let {carrito} = useContext(CartContext);
    
    return (
        <Fragment>
            <div className="flex">
                <img src="assets/ecommerce.png" alt="Icon" className="w-8 inline" />
                <p className="pl-4">{carrito.length}</p>
            </div>
        </Fragment>
    );
}