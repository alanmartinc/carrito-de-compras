export default function CodeError() {
    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:text-center">
                <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                    Error 404
                </h1>

                <p className="font-extrabold text-gray-700 mb-6">
                    Vaya, no hemos podido encontrar la página que buscas.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 mb-6">
                <div key="id">
                    <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="assets/error404.png" alt="Error 404" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
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
    );
}