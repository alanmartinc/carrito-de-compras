export default function CodeError() {
    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:text-center">
                <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                    Error 404
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 mb-6">
                <div key="id">
                    <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img
                            src="https://baja.website/wp-content/uploads/2021/04/error-404-not-found.jpg"
                            alt="Error 404"
                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}