/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Header() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">

                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">SOLUCIONES</span>{' '}
                                    <span className="block text-yellow-600 xl:inline">INFORMÁTICAS</span>
                                </h1>

                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Brindamos servicios de Desarrollo Web y de aplicaciones en su total desarrollo. Asesoramos en todos los puntos necesarios que el cliente requiera desde presupuestos hasta la puesta en marcha o ideas de trabajo.
                                </p>

                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a
                                            href="/prices"
                                            className="w-full h-14 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-800 md:py-4 md:text-lg md:px-10"
                                        >
                                            Ver Más
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </main>
                    </div>
                </div>
            </div>

            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt=""
                />
            </div>
        </div>
    )
}