import Layout from "@/components/Layout";
import { BarraHomeAdote } from "@/components/BarraHomeAdote";
import { ContainerImg } from "@/components/ContainerImg";


export default function AdoteLayout() {
  return (
    <>
      <Layout>
        <BarraHomeAdote />
        <ContainerImg />
      </Layout>
    </>
  );
}
