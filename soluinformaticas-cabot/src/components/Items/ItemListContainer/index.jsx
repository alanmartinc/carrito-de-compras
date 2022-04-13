import { Fragment, useEffect, useState } from "react";
import ItemList from "./ItemList";
import products from "../../../utils/Products";
import customFetch from "../../../utils/customFetch";

export default function ItemListContainer() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        customFetch(3000, products)
        .then(sucess => setItem(sucess))
        .catch(error => console.log(error));
    }, [item]);

    return (
        <Fragment>
            <div className="max-w-2xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:text-center">
                    <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                        Precios
                    </h1>
                </div>
    
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <ItemList items={item} />
                </div>
            </div>
        </Fragment>
    );
}