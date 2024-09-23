import AppMenu from '../components/AppMenu';
import RecipeReviewCard from '../components/Card/Card';
import TitlePage from '../components/TitlePage';
import PlacaDeVideo from '../assets/placa de video.jpeg'

function Products() {
  return (
    <>
      <TitlePage title="Produtos" />
      <RecipeReviewCard
        title="Placa de Vídeo "
        subheader="Setembro 22, 2024"
        image= {PlacaDeVideo} 
        contentText="Gigabyte Radeon RX 6600 EAGLE AMD, 8GB GDDR6, Preto"
        examples={[
          'Características:- Marca: Gigabyte - Modelo: GV-R66EAGLE-8GD',
          'Especificações: - Processamento de Gráficos: Radeon RX 6600 - Processadores de fluxo: 1792 - DirectX: 12 Ultimate - OpenGL: 4,6'
        ]}
      />

      <AppMenu />
    </>
  );
}

export default Products;
