import Item from "../../Item";

export default function ItemList({items}) {
    return (
        items.map(item => (
            <Item 
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.category}
                description={item.description}
                imageAlt={item.imageAlt}
                imageSrc={item.imageSrc}
                price={item.price}
            />
        ))
    )
}