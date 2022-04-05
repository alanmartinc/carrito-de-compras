import { Fragment, useState } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Services from "../../components/Services";

export default function Home() {
  const [isClose, setIsClose] = useState(true);

  const toggleClose = () => {
    setIsClose(!isClose);
}

  return (
    <Fragment>
      {isClose && <Banner handleClose={toggleClose} className="hidden" /> }
      <Header />
      <Services />
    </Fragment>
  );
}