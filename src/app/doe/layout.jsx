import Layout from "@/components/Layout";
import ContainerImgDoe from "@/components/Doe/ContainerImgDoe";
import Exemplo from "@/assets/exemplo.png";
import NavigateToHome from "@/components/Doe/NavigateToHome";

export default function DoeLayout() {
  return (
    <>
      <Layout>
        <ContainerImgDoe img={Exemplo} />
        <NavigateToHome tela="Doe" rota="doe" />
      </Layout>
    </>
  );
}
