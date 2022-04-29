import { Fragment, useEffect, useState } from "react";
import { getDocs, collection, query, where } from 'firebase/firestore';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../../Spinner";
import ItemClentsContainer from "../ItemClientsContainer";
import { firestoreDb } from "../../../services/firebase";

export default function ItemListContainer() {
    const [item, setItem] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const collectionRef = id 
        ? query(collection(firestoreDb, 'products'), where('category', '==', id))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
        const products = response.docs.map(doc => {
            return { id: doc.id, ...doc.data()}
        })
        setItem(products)
        })
    }, [id])
    

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

            <ItemClentsContainer />
        </Fragment>
    );
}