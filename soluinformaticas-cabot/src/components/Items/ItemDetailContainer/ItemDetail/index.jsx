import { Fragment, useState } from "react";
import ItemCount from "../../Item/ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({items}) {
    const [cant, setCant] = useState(0);

    function handleOnAdd(cant) {
        alert(`Seleccionaste ${cant} productos`);
        setCant(cant);
    }

    return (
        <Fragment>
            {items.map((item) => (
                <div key={item.id}>
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-80 lg:aspect-none">
                        <img
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                        />
                    </div>

                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-lg mb-4">
                                {item.name}
                            </h3>

                            <p className="text-lg text-gray-700 h-20">
                                {item.description}
                            </p>
                        </div>

                        <p className="text-lg font-medium text-gray-900">{item.price}</p>
                    </div>

                    <div className="mt-4">
                        {cant > 0 ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>}
                    </div>
                </div>
            ))}
        </Fragment>
    );
}