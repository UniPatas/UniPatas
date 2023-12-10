import Layout from "@/components/Layout";
import BannerOngs from "@/assets/banner-ongs.png";
import NavigateToHome from "@/components/Doe/NavigateToHome";
import ContainerImg from "@/components/Doe/ContainerImg";
import LayoutCardsOngs from "@/components/Ongs/LayoutCardsOngs";

export default function OngsLayout() {
  return (
    <>
      <Layout>
        <NavigateToHome tela="Ongs" rota="ongs" />
        <ContainerImg img={BannerOngs} alt={"Banner de imagem Ong's"} />
        <LayoutCardsOngs />
      </Layout>
    </>
  );
}
