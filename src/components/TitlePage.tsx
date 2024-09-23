interface TitlePageProps {
  title: string;
}

function TitlePage({ title }: TitlePageProps) {
  return <h1 style={{ color: "#14ca0b" }}>{title}</h1>;
}

export default TitlePage;
