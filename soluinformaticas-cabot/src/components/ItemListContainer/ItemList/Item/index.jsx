import ItemCount from "./ItemCount";

export default function Item() {
    function onAdd(cant) {
        alert(cant);
    }

    return (
        <ItemCount onAdd={onAdd} />
    );
}