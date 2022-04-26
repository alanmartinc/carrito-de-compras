import { Fragment, useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore";

export default function ItemClients() {
    const [clients, setClients] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const clientes = doc(db, "clients", "1Ji1EYPIbtnqQcgeMU4K");

        getDoc(clientes).then((res) => {
            setClients({id: res.id, ...res.data()});
        })
    }, [])

    return (
        <Fragment>
            {clients.id ? 
                <>
                    <p>{clients.name1} - {clients.email1} - {clients.phone1}</p>
                    <p>{clients.name2} - {clients.email2} - {clients.phone2}</p>
                    <p>{clients.name3} - {clients.email3} - {clients.phone3}</p>
                    <p>{clients.name4} - {clients.email4} - {clients.phone4}</p>
                    <p>{clients.name5} - {clients.email5} - {clients.phone5}</p>
                    <p>{clients.name6} - {clients.email6} - {clients.phone6}</p>
                </>
            : <p>Loading...</p>}
        </Fragment>
    );
}