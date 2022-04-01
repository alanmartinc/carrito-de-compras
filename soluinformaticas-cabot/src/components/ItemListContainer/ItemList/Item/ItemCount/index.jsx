import {useState} from "react";

export default function ItemCount({ onAdd }) {
    const [cant, setCant] = useState(0);

    const handleIncrement = () => {
        setCant(cant + 1);
    }

    const handleDecrement = () => {
        (cant > 0 && setCant(cant - 1));
    }

    return (
        <>
            <button onClick={handleDecrement}>-</button>
            {cant}
            <button onClick={handleIncrement}>+</button>
            <br />
            <button onClick={() => onAdd(cant)}>Agregar al carrito</button>
        </>
    );
}