import { useContext } from "react";
import { CartContext } from "../../cartContext";

export default function Cart() {
    let {carrito} = useContext(CartContext);

    return (
        <div className="h-screen">Cant {carrito.length}</div>
    );
}