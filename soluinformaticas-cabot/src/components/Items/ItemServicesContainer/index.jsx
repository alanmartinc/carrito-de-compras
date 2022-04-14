import { Fragment, useEffect, useState } from "react";
import ItemServices from "./ItemServices";
import customFetch from "../../../utils/customFetch";
import services from "../../../utils/Services";
import Spinner from "../../Spinner";

export default function ItemServicesContainer() {
    const [item, setItems] = useState([]);

    useEffect(() => {
        customFetch(3000, services)
        .then(sucess => setItems(sucess))
        .catch(error => console.log(error));
    }, [item]);

    return (
        <Fragment>
            {item.length === 0 ? (
                <div>
                    <Spinner />
                </div>
            ) : (
                <ItemServices items={item} />
            )}
        </Fragment>
    );
}