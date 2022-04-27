import { Fragment, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import products from "../../../utils/Products";
import { useParams } from "react-router-dom";
import Spinner from "../../Spinner";

export default function ItemDetailContainer() {
    const [item, setItems] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
            resolve(products.filter((product) => product.id === Number(id)));
            } else {
            reject(
                "Hubo un problema con la carga de nuestros elementos, por favor intentalo mas tarde..."
            );
            }
        }, 2000);
        });
        promesa.then((rta) => setItems(rta)).catch((err) => console.log(err));
    }, [id, item]);

    return (
        <Fragment>
            <div className="max-w-2xl mx-auto pt-16 pb-6 px-4 sm:pt-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                        Detalles
                    </h1>
                </div>
    
                <div className="h-screen grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8">
                    {item.length === 0 ? (
                        <div>
                            <Spinner />
                        </div>
                    ) : (
                        <ItemDetail items={item} />
                    )}
                </div>
            </div>
        </Fragment>
    );
}