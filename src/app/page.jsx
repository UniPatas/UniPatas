import { DestaqueAdocao } from "@/components/Home/DestaqueAdocao";
import { Relatos } from "@/components/Home/Relatos";
import { SliderOngs } from "@/components/Home/SliderOngs/SliderOngs";
import { ContainerAnuncio } from "@/components/Home/ContainerAnuncio";
import { ComponenteForum } from "@/components/Home/ComponenteForum";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <DestaqueAdocao />
        <SliderOngs />
        <ContainerAnuncio />
        <ComponenteForum />
        <Relatos />
      </Layout>
    </>
  );
}
