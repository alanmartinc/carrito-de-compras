import { Fragment } from "react";

export default function ItemClients({items}) {
    return (
        <Fragment>
            {items.map(item => <p>{item.name + " " + item.country}</p>)}
        </Fragment>
    );
}