import {Fragment, useContext, useState} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../cartContext";

export default function ItemCount({product, stock, initial}) {
    let {addItem} = useContext(CartContext);
    let {clear} = useContext(CartContext);
    
    const [quantity, setQuantity] = useState(initial);
    const [addedToCard, setAddedToCart] = useState(false);

    const handleIncrement = () => {
        quantity < stock && setQuantity(quantity + 1);
    }

    const handleDecrement = () => {
        quantity > initial && setQuantity(quantity - 1);
    }

    return (
        <Fragment>
            <div className="h-10 bg-gray-200 text-center flex justify-around items-center">
                <button onClick={handleDecrement}>-</button>
                {quantity}
                <button onClick={handleIncrement}>+</button>
            </div>

            {!addedToCard && <div className="w-full text-center mt-4">
                <button 
                    onClick={() => {addItem({...product, quantity: quantity}); setAddedToCart(true)}}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-800 md:py-4 md:text-lg md:px-10"
                >
                    Agregar al carrito
                </button>
            </div>}

            {addedToCard && <div className="w-full text-center mt-4">
                <button 
                    onClick={() => {clear(); setAddedToCart(false)}}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-800 md:py-4 md:text-lg md:px-10"
                >
                    Borrar carrito
                </button>
            </div>}

            {addedToCard && <div className="w-full text-center mt-4">
                <Link
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-800 md:py-4 md:text-lg md:px-10"
                    to="/cart"
                >
                    Ir al carrito
                </Link>
            </div>}
        </Fragment>
    );
}