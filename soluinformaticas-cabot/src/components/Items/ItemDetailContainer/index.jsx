import { Fragment, useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../../Spinner";
import { firestoreDb } from "../../../services/firebase";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getDoc(doc(firestoreDb, "products", id)).then((response) => {
      setItem(response.data());
    });
  }, [id]);

  return (
    <Fragment>
      <div className="max-w-2xl mx-auto pt-16 pb-6 px-4 sm:pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
            Detalles
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8">
          {item.length === 0 ? (
            <div>
              <Spinner />
            </div>
          ) : (
            <ItemDetail {...item} />
          )}
        </div>
      </div>
    </Fragment>
  );
}
