import { Fragment } from "react";
import ItemCount from "./ItemCount";

export default function Item() {
    function handleOnAdd(cant) {
        alert(`Seleccionaste ${cant} productos`);
    }

    return (
        <Fragment>
            <ItemCount stock={5} initial={1} onAdd={handleOnAdd} />
        </Fragment>
    );
}