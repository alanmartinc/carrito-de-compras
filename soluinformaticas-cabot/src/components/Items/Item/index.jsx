import { Fragment } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function Item({id, name, imageSrc, imageAlt, price, description}) {
    return (
        <Fragment>
            <div key={id}>
                <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-80 lg:aspect-none">
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
                    </div>

                    <p className="text-sm font-medium text-gray-900">{price}</p>
                </div>

                <div className="mt-4">
                    <ItemCount product={{id, name, imageSrc, imageAlt, price, description}} stock={5} initial={1} />
                </div>

                <div className="w-full text-center mt-4">
                    <Link
                        to={`/item/${id}`}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-800 border-yellow-800 md:py-4 md:text-lg md:px-10"
                    >
                        Ver detalle
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}