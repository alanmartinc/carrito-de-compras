import { Fragment, useEffect, useState } from "react";
import ItemUser from "./ItemUser";

export default function ItemUserContainer() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const details = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://universities.hipolabs.com/search?country=United+States&cant=100", details)
            .then(response => response.json())
            .then(result => {
                setClients(result)
            })
            .catch(error => {
                console.log('error', error)
            });
    }, []);

    return (
        <Fragment>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                            {/* <ItemUser clients={clients} /> */}
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}