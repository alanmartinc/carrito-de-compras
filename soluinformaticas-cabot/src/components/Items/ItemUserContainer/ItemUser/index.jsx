import { Fragment } from "react";

export default function ItemUser({clients}) {
    return (
        <Fragment>
            {clients.map(item => <p>{item.name + " " + item.country}</p>)}
        </Fragment>
    );
}