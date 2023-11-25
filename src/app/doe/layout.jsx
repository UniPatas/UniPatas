import Layout from "@/components/Layout";
import ContainerImgDoe from "@/components/Doe/ContainerImgDoe";
import Exemplo from "@/assets/exemplo.png"

export default function DoeLayout() {
  return (
    <>
      <Layout>
      <ContainerImgDoe img={Exemplo}/>
      </Layout>
    </>
  );
}
