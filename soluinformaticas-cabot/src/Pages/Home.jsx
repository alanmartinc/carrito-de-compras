import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import ItemListContainer from "../components/ItemListContainer";

export default function Home() {
  return (
    <div className="h-screen">
      <Banner />
      <ItemListContainer greeting={"Hola Mundo"} />
      <Header />
    </div>
  );
}