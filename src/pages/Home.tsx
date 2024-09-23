import AppMenu from "../components/AppMenu";
import CardContent from "../components/CardContent";
import HeaderMenu from "../components/HeaderMenu";
import DenseTable from "../components/Tables/Table";
import TitlePage from "../components/TitlePage";

function Home() {
  return (
    <>
      <HeaderMenu />
      <TitlePage title="Home" />
      <CardContent>
        <DenseTable/>
      </CardContent>
      <AppMenu />
    </>
  );
}

export default Home;
