import {Fragment, useState} from "react";

export default function ItemCount({stock, initial, onAdd}) {
    const [cant, setCant] = useState(initial);

    const handleIncrement = () => {
        cant < stock && setCant(cant + 1);
    }

    const handleDecrement = () => {
        cant > initial && setCant(cant - 1);
    }

    return (
        <Fragment>
            <div className="h-10 bg-gray-200 text-center flex justify-around items-center">
                <button onClick={handleDecrement}>-</button>
                {cant}
                <button onClick={handleIncrement}>+</button>
            </div>

            <div className="w-full text-center mt-4">
                <button 
                    onClick={() => onAdd(cant)}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-800 md:py-4 md:text-lg md:px-10"
                >
                    Agregar al carrito
                </button>
            </div>
        </Fragment>
    );
}