import Item from "../../Item";

export default function ItemList({products}) {
    return (
        products.map(product => (
            <Item 
                key={product.id}
                name={product.name}
                description={product.description}
                imageAlt={product.imageAlt}
                imageSrc={product.imageSrc}
                price={product.price}
            />
        ))
    )
}