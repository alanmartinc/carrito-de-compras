import Banner from "../../components/Banner";
import Header from "../../components/Header";
import ItemListContainer from "../../components/ItemListContainer";

export default function Home() {
  return (
    <div className="h-screen">
      <Banner />
      <ItemListContainer greeting={"Hola Mundo"} />
      <Header />
    </div>
  );
}