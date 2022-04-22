import { Fragment, useEffect, useState } from "react";
import ItemList from "./ItemList";
import products from "../../../utils/Products";
import { useParams } from "react-router-dom";
import Spinner from "../../Spinner";

export default function ItemListContainer() {
    const [item, setItem] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {

            setTimeout(() => {
                if (id) {
                resolve(products.filter((product) => product.category === id));
                } else {
                resolve(products.filter((product) => product.category));
                }
            }, 2000);
        });

        promesa
        .then((sucess) => {
            setItem(sucess);
        })
        .catch((error) => error);
    }, [id, item]);

    return (
        <Fragment>
            <div className="max-w-2xl mx-auto pt-16 pb-6 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="text-center">
                    <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                        Productos
                    </h1>
                </div>
    
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {item.length === 0 ? (
                        <div>
                            <Spinner />
                        </div>
                    ) : (
                        <ItemList items={item} />
                    )}
                </div>
            </div>
        </Fragment>
    );
}