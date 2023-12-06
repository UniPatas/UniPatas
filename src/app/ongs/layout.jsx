import Layout from "@/components/Layout";
import BannerOngs from "@/assets/banner-ongs.png";
import ContainerImg from "@/components/Doe/ContainerImg";

export default function OngsLayout() {
  return (
    <>
      <Layout>
        <ContainerImg img={BannerOngs} alt={"Banner de imagem Ong's"} />
      </Layout>
    </>
  );
}
