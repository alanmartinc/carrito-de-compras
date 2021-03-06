import { Fragment, useState } from "react";
import ItemListContainer from "../../components/Items/ItemListContainer";
import Banner from "../../components/Banner";

export default function Products() {
    const [isClose, setIsClose] = useState(true);

    const toggleClose = () => {
        setIsClose(!isClose);
    }

    return (
        <Fragment>
            {isClose && <Banner handleClose={toggleClose} className="hidden" /> }

            <ItemListContainer />
        </Fragment>
    );
}