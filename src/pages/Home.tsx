import AppMenu from "../components/AppMenu";
import CardContent from "../components/CardContent";
import HeaderMenu from "../components/HeaderMenu";
import TitlePage from "../components/TitlePage";

function Home() {
  return (
    <>
      <HeaderMenu />
      <TitlePage title="Home" />
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam
          quibusdam architecto itaque labore iste quos repudiandae autem,
          voluptatibus, minima, omnis soluta cumque explicabo perspiciatis.
          Accusamus perferendis harum error nisi.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          aliquam, ex eaque atque incidunt nemo quidem! Perspiciatis delectus
          dignissimos similique officia, quae iste animi blanditiis in adipisci
          nobis, voluptate temporibus!
        </p>
      </CardContent>
      <AppMenu />
    </>
  );
}

export default Home;
