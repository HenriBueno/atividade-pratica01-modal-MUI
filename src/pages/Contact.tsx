import AppMenu from "../components/AppMenu";
import CardContent from "../components/CardContent";
import FolderList from "../components/List/List";
import TitlePage from "../components/TitlePage";

function Contact() {
  return (
    <>
      <TitlePage title="Entre em Contato" />
      <CardContent>
        <FolderList/>
      </CardContent>
      <AppMenu />
    </>
  );
}

export default Contact;
