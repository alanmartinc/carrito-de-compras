import { Fragment, useContext, useState } from "react";
import { CartContext } from "../../cartContext";
import Spinner from "../../components/Spinner";

export default function Cart() {
  let { cart, removeItem } = useContext(CartContext);
  const [creatingOrder, setCreatingOrder] = useState(false);
  const [id, setId] = useState("");

  function handleOnAdd() {
    setCreatingOrder(true);

    setTimeout(() => {
      setCreatingOrder(false);
      setId("idCompra");
    }, 4000);
  }

  return (
    <Fragment>
      {cart.length === 0 && !id && !creatingOrder && (
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
                  alt="Error 404"
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
      )}
      {!creatingOrder && !id && cart.length > 0 && (
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

                    <div className="w-full text-center mt-4">
                      <button
                        onClick={() => handleOnAdd()}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-800 md:py-4 md:text-lg md:px-10"
                      >
                        Comprar {items.quantity}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}

      {creatingOrder && !id && <Spinner />}

      {!creatingOrder && id && (
        <div className="max-w-2xl mx-auto pt-16 pb-6 px-4 sm:pt-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
              Orden {id} comprado exitosamente!
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 mb-6">
            <div key="id">
              <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img
                  src="assets/orderConfirmed.png  "
                  alt="Error 404"
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
      )}
    </Fragment>
  );
}
