import { Fragment, useState } from "react";
import ItemListContainer from "../../components/Items/ItemListContainer";
import ItemClentsContainer from "../../components/Items/ItemClientsContainer";
import Banner from "../../components/Banner";

export default function Prices() {
    const [isClose, setIsClose] = useState(true);

    const toggleClose = () => {
        setIsClose(!isClose);
    }

    return (
        <Fragment>
            {isClose && <Banner handleClose={toggleClose} className="hidden" /> }

            <ItemListContainer />
            <ItemClentsContainer />
        </Fragment>
    );
}