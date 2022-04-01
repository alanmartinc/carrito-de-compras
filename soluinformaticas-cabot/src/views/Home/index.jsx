import Banner from "../../components/Banner";
import Header from "../../components/Header";
import ItemListContainer from "../../components/ItemListContainer";

export default function Home() {
  return (
    <div className="h-screen">
      <Banner />
      <Header />
      <ItemListContainer />
    </div>
  );
}