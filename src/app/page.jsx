import { DestaqueAdocao } from "@/components/Home/DestaqueAdocao";
import { Relatos } from "@/components/Home/Relatos";
import { SliderOngs } from "@/components/Home/SliderOngs/SliderOngs";
import { SliderNoticia } from "@/components/Home/SliderNoticia/SliderNoticia";
import { ContainerAnuncio } from "@/components/Home/ContainerAnuncio";
import { ComponenteForum } from "@/components/Home/ComponenteForum";
import Layout from "@/components/Layout";
import { SliderOurHist } from "@/components/Home/Sliders/SliderOurHist";

export default function Home() {
  return (
    <>
      <Layout>
        <SliderNoticia />
        <DestaqueAdocao />
        <SliderOngs />
        <ContainerAnuncio />
        <ComponenteForum />
        <Relatos />
        <SliderOurHist />
      </Layout>
    </>
  );
}