import { Fragment } from "react";

export default function ItemDetail() {
    return (
        <Fragment>
            <div className="w-full text-center mt-4">
                <button
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-800 border-yellow-800 md:py-4 md:text-lg md:px-10"
                >
                    Ver detalle
                </button>
            </div>
        </Fragment>
    );
}