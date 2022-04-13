export default function MessageConfirm() {
    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:text-center">
                <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                    Contacto
                </h1>

                <p className="font-extrabold text-gray-700 mb-6">
                    Su consulta se envio correctamente!
                </p>
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 mb-6">
                <div key="id">
                    <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="assets/sucess.png" alt="Sucess" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}