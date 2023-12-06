import Layout from "@/components/Layout";
import ContainerImgDoe from "@/components/Doe/ContainerImg";
import BannerDonation from "@/assets/banner_donation.png";
import NavigateToHome from "@/components/Doe/NavigateToHome";
import Cards from "@/components/Doe/ConteinerQrcode/Cards";
import Paceiros from "@/components/Doe/ConteinerParceiros/EmpresaParceiras";

export default function DoeLayout() {
  return (
    <>
      <Layout>
        <NavigateToHome tela="Doe" rota="doe" />
        <ContainerImgDoe img={BannerDonation} alt={"Banner de imagem Doe"} />
        <Cards/>
        <Paceiros/>
      </Layout>
    </>
  );
}
