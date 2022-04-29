import { Fragment, useState } from "react";
import ItemCount from "../../Item/ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({id, name, imageSrc, imageAlt, description, price}) {
    const [quantity, setQuantity] = useState(0);

    function handleOnAdd(quantity) {
        console.log(quantity);
        setQuantity(quantity);
    }

    return (
        <Fragment>
            <div key={id}>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-80 lg:aspect-none">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>

                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-lg mb-4">
                            {name}
                        </h3>

                        <p className="text-lg text-gray-700 h-20">
                            {description}
                        </p>
                    </div>

                    <p className="text-lg font-medium text-gray-900">{price}</p>
                </div>

                <div className="mt-4">
                    {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>}
                </div>
            </div>
        </Fragment>
    );
}