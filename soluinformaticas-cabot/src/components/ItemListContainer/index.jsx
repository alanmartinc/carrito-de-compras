import { useEffect } from "react";

export default function ItemListContainer(props) {
    useEffect(() => {
        const pago = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("50");
                //reject(null);
            }, 3000);
        });

        console.log(pago);

        pago
        // Mensaje de exito
        .then((res) => {
            console.log("gracias por pagar " + res);
        })
        // Mensaje de error
        .catch((err) => {
            console.log(err);
        })
        // Hacelo cuando termine
        .finally(() => {
            console.log("Other")
        })

        console.log(pago);
    }, []);

    return (
        <h1>{props.greeting}</h1>
    );
}