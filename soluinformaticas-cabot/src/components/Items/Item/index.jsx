import { Fragment } from "react";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "../ItemDetailContainer";

export default function Item({id, name, description, imageSrc, imageAlt, price}) {
    function handleOnAdd(cant) {
        alert(`Seleccionaste ${cant} productos`);
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
                        <h3 className="text-sm mb-4">
                            {name}
                        </h3>

                        <p className="text-sm text-gray-700 h-20">
                            {description}
                        </p>
                    </div>

                    <p className="text-sm font-medium text-gray-900">{price}</p>
                </div>

                <div className="mt-4">
                    <ItemCount stock={5} initial={1} onAdd={handleOnAdd} />
                </div>

                <div className="mt-4">
                    <ItemDetailContainer />
                </div>
            </div>
        </Fragment>
    );
}