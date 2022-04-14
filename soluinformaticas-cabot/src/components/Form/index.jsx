import { Fragment } from "react";

export default function Form() {
    return (
        <Fragment>
            <div className="h-screen">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="text-center">
                        <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                            Contacto
                        </h1>

                        <p className="font-extrabold text-gray-700 mb-6">
                            Haz tu consulta y te responderemos a la brevedad.
                        </p>
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
                                                Nombre
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10 p-2"
                                                placeholder="Ingresa tu nombre" 
                                                required
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="last-name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Apellido
                                            </label>

                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10 p-2"
                                                placeholder="Ingresa tu apellido" 
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
                                                required
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="issue"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Asunto
                                            </label>

                                            <input
                                                type="text"
                                                name="issue"
                                                id="issue"
                                                className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10 p-2"
                                                placeholder="Ingrese su asunto" 
                                                required
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6">
                                            <label
                                                htmlFor="comments"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Comentarios
                                            </label>

                                            <textarea
                                                name="comments"
                                                id="comments"
                                                rows="10"
                                                className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-start lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <a
                                                href={`/contact-sucess`}
                                                className="w-full h-14 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-800 md:py-4 md:text-lg md:px-10"
                                            >
                                                Enviar
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
