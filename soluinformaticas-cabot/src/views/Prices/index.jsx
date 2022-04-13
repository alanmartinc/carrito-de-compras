import { Fragment } from "react";
import ItemListContainer from "../../components/Items/ItemListContainer";
import ItemClentsContainer from "../../components/Items/ItemClientsContainer";

export default function Prices() {
    return (
        <Fragment>
            <ItemListContainer />
            <ItemClentsContainer />
        </Fragment>
    );
}