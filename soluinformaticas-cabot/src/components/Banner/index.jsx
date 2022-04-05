import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function Banner({handleClose}) {
    return (
        <div className="bg-gray-600">
            <div className="max-w-9xl mx-auto py-3 px-6 lg:px-8 pl-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                        <span className="flex p-2 rounded-lg bg-gray-800">
                            <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>

                        <p className="ml-3 font-medium text-white truncate">
                            <span className="md:hidden">¡Anunciamos un nuevo producto!</span>
                            <span className="hidden md:inline">¡Grandes noticias! Estamos emocionados de anunciar un nuevo producto.</span>
                        </p>
                    </div>

                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button
                            type="button"
                            className="-mr-1 flex p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={handleClose}
                        >
                            <span className="sr-only">Dismiss</span>
                            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}