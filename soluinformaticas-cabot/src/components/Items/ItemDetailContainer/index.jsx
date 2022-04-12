import { Fragment, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import products from "../../../utils/Products";
import customFetch from "../../../utils/customFetch";

export default function ItemDetailContainer() {
    const [item, setItems] = useState([]);

    useEffect(() => {
        customFetch(3000, products)
        .then(sucess => setItems(sucess))
        .catch(error => console.log(error));
    }, [item]);

    return (
        <Fragment>
            <div className="max-w-2xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                        Detalles
                    </h1>
                </div>
    
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8">
                    <ItemDetail items={item} />
                </div>
            </div>
        </Fragment>
    );
}