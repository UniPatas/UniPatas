import { BarraHomeAdote } from "@/components/Adote/BarraHomeAdote";
import { ContainerImg } from "@/components/Adote/ContainerImg";
import { BotaoCriarPubli } from "@/components/Adote/BotaoCriarPubli/BotaoCriarPubli";
import Layout from "@/components/Layout";

export default function AdoteLayout() {
  return (
    <>
      <Layout>
        <BarraHomeAdote />
        <ContainerImg />
        <BotaoCriarPubli />
      </Layout>
    </>
  );
}
