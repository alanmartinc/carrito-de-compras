import { Fragment, useContext, useState } from "react";
import { CartContext } from "../../cartContext";
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";
import Spinner from "../../components/Spinner";

export default function Cart() {
  let { cart, removeItem } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [buy, setBuy] = useState(false);
  const [orden, setOrden] = useState('');
  const [popup, setPopup] = useState(false);
  const [datos, setDatos] = useState({
    nombre: '',
    telefono: '',
    email: ''
  });

  const popUp = () => {
    setPopup(true);
  }

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
      [event.target.telefono]: event.target.value,
      [event.target.email]: event.target.value
    });
  }

  const createOrder = () => {
    setLoading(true);

    const objOrder = {
      items: cart,
      buyer: {
        ...datos
      },
      date: new Date()
    }

    const ids = cart.map(prod => prod.id);
    const batch = writeBatch(firestoreDb);
    const collectionRef = collection(firestoreDb, 'products');
    const outOfStock = [];

    getDocs(query(collectionRef, where(documentId(), 'in', ids)))
      .then(response => {
        response.docs.forEach(doc => {
          const dataDoc = doc.data();
          const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        })
      }).then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(firestoreDb, 'orders');
          return addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({ name: 'outOfStockError', products: 'outOfStock' });
        }
      }).then(({ id }) => {
        batch.commit();
        setOrden(id);
        setBuy(true);
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        setLoading(false);
      })
  }

  if (loading) {
    return <Spinner />
  }

  if (buy) {
    return (
      <div className="max-w-2xl mx-auto pt-16 pb-6 px-4 sm:pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
            Orden {orden} comprado exitosamente!
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 mb-6">
          <div key="id">
            <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img
                src="assets/orderConfirmed.png"
                alt="Order Confirmed"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <a
              href={`products`}
              className="w-full h-14 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-800 md:py-4 md:text-lg md:px-10"
            >
              Volver
            </a>
          </div>
        </div>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto pt-16 pb-6 px-4 sm:pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
            No hay productos en el carrito
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 mb-6">
          <div key="id">
            <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img
                src="assets/accessDenied.png"
                alt="Access Denied"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <a
              href={`products`}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-800 md:py-4 md:text-lg md:px-10"
            >
              Agregar
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {popup ?
        <>
          <div className="max-w-2xl mx-auto pt-16 pb-6 px-4 sm:pt-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                Carrito de Compra
              </h1>
            </div>

            {cart.length > 0 &&
              cart.map((items, index) => (
                <div
                  key={index}
                  className="grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 pb-20"
                >
                  {items.length === 0 ? (
                    <div>
                      <Spinner />
                    </div>
                  ) : (
                    <div key={items.id}>
                      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-80 lg:aspect-none">
                        <img
                          src={items.imageSrc}
                          alt={items.imageAlt}
                          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                        />
                      </div>

                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-lg mb-4">{items.name}</h3>

                          <p className="text-lg text-gray-700 h-20">
                            {items.description}
                          </p>
                        </div>

                        <p className="text-lg font-medium text-gray-900">
                          {items.price}
                        </p>
                      </div>

                      <div className="w-full text-center mt-4">
                        <button
                          onClick={() => removeItem(items.id)}
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-800 md:py-4 md:text-lg md:px-10"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

            <div className="w-full text-center mt-4">
              <button
                onClick={() => createOrder()}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-800 md:py-4 md:text-lg md:px-10"
              >
                Comprar
              </button>
            </div>

          </div>
        </>
        :
        <div className="max-w-2xl mx-auto pt-16 pb-6 px-4 sm:pt-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
              Completa tus datos para finalizar la compra
            </h1>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nombre y Apellido
                      </label>

                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10 p-2"
                        placeholder="Ingresa tu nombre y apellido"
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Telefono
                      </label>

                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10 p-2"
                        placeholder="Ingresa tu telefono"
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10 p-2"
                        placeholder="Ingresa tu email"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-start lg:justify-start">
                    <div className="rounded-md shadow">
                      <button
                        onClick={popUp}
                        className="w-full h-14 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-800 md:py-4 md:text-lg md:px-10"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>}
    </>
  );
}
