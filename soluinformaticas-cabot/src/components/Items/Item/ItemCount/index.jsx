import {Fragment, useContext, useState} from "react";
import { CartContext } from "../../../../cartContext";

export default function ItemCount({product, stock, initial}) {
    let {addItem} = useContext(CartContext);
    let {clear} = useContext(CartContext);
    
    const [quantity, setQuantity] = useState(initial);

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

            <div className="w-full text-center mt-4">
                <button 
                    onClick={() => addItem({...product, quantity: quantity})}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-800 md:py-4 md:text-lg md:px-10"
                >
                    Agregar al carrito
                </button>
            </div>

            <div className="w-full text-center mt-4">
                <button 
                    onClick={() => clear()}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-800 md:py-4 md:text-lg md:px-10"
                >
                    Borrar carrito
                </button>
            </div>
        </Fragment>
    );
}