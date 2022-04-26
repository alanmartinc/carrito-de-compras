import { useContext } from "react";
import { CartContext } from "../../cartContext";

export default function Cart() {
    let {carrito} = useContext(CartContext);

    return (
        <div className="h-screen max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="text-center">
                <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                    Carrito de Compra
                </h1>

                <p className="font-extrabold text-gray-700 mb-6">
                    Cant {carrito.length}
                </p>
            </div>
        </div>
    );
}