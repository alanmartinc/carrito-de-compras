import React, { Fragment, useContext } from "react";
import { CartContext } from "../../../cartContext";

export default function Cart() {
    let {cart} = useContext(CartContext);
    
    return (
        <Fragment>
            <div className="">
                <div className="mr-4">
                    <img src="assets/ecommerce.png" alt="Icon" className="w-8 inline" />
                </div>
                
                <div className="hidden md:block text-white bg-gray-600 rounded-full w-6 h-6 text-center absolute top-2 right-7">{cart.length}</div>
            </div>
        </Fragment>
    );
}