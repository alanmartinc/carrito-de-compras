import { Fragment} from "react";
import Spinner from "../../Spinner";
import ItemClients from "./ItemClients";

export default function ItemClentsContainer() {
    return (
        <Fragment>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="text-center">
                            <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                                Clientes
                            </h1>
                        </div>

                        <div className="border-4 border-dashed border-gray-200 rounded-lg p-4 text-center">
                            <ItemClients />
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}