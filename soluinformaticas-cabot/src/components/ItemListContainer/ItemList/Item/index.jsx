import ItemCount from "./ItemCount";

export default function Item() {
    function onAdd(cant) {
        alert(cant);
    }

    return (
        <ItemCount stock="5" initial="1" onAdd={onAdd} />
    );
}