import { Fragment, useEffect, useState } from "react";
import ItemPortfolio from "./ItemPortfolio";
import customFetch from "../../../utils/customFetch";
import portfolio from "../../../utils/Portfolio";
import Spinner from "../../Spinner";

export default function ItemPortfolioContainer() {
    const [item, setItems] = useState([]);

    useEffect(() => {
        customFetch(3000, portfolio)
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
                <ItemPortfolio items={item} />
            )}
        </Fragment>
    );
}