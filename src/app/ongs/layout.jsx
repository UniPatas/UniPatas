import Layout from "@/components/Layout";
import BannerOngs from "@/assets/banner-ongs.png";
import NavigateToHome from "@/components/Doe/NavigateToHome";
import ContainerImg from "@/components/Doe/ContainerImg";
import CardOngs from "@/components/Ongs/CardsOngs";

export default function OngsLayout() {
  return (
    <>
      <Layout>
        <NavigateToHome tela="Ongs" rota="ongs" />
        <ContainerImg img={BannerOngs} alt={"Banner de imagem Ong's"} />
        <CardOngs />
      </Layout>
    </>
  );
}
