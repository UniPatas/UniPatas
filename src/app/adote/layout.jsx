import { BarraHomeAdote } from "@/components/BarraHomeAdote";
import { ContainerImg } from "@/components/ContainerImg";
import Layout from "@/components/Layout";

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
