import { Fragment } from "react";

export default function ItemServices({items}) {
    return (
        <Fragment>
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                            Servicios
                        </h1>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            {items.map((item) => (
                                <div key={item.id} className="relative bg-black p-4 rounded">
                                    <dt>
                                        <p className="ml-16 text-lg leading-6 font-medium text-white">{item.name}</p>
                                    </dt>

                                    <ul className="mt-2 ml-16 text-base text-gray-400 pl-4">
                                        <li>
                                            {item.description}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}