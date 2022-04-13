import { Fragment, useEffect, useState } from "react";
import ItemPortfolio from "./ItemPortfolio";
import customFetch from "../../../utils/customFetch";
import portfolio from "../../../utils/Portfolio";

export default function ItemPortfolioContainer() {
    const [item, setItems] = useState([]);

    useEffect(() => {
        customFetch(3000, portfolio)
        .then(sucess => setItems(sucess))
        .catch(error => console.log(error));
    }, [item]);

    return (
        <Fragment>
            <ItemPortfolio items={item} />
        </Fragment>
    );
}