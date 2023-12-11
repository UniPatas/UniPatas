import { DestaqueAdocao } from "@/components/Home/DestaqueAdocao";
import { Relatos } from "@/components/Home/Relatos";
import { SliderOngs } from "@/components/Home/Sliders/SliderOngs";
import { SliderNoticia } from "@/components/Home/Sliders/SliderNoticia";
import { ContainerAnuncio } from "@/components/Home/ContainerAnuncio";
// import { ComponenteForum } from "@/components/Home/ComponenteForum";
import Layout from "@/components/Layout";
import { SliderOurHist } from "@/components/Home/Sliders/SliderOurHist";
import { SliderMembers } from "@/components/Home/Sliders/SliderMembers";
import DuvidasFrequentes from "@/components/Home/DuvidasFrequentes/DuvidasFrequentes";

export default function Home() {
  return (
    <>
      <Layout>
        <SliderNoticia />
        <DestaqueAdocao />
        <SliderOngs />
        <ContainerAnuncio />
        {/* <ComponenteForum /> */}
        <Relatos />
        <SliderOurHist />
        <SliderMembers />
        <DuvidasFrequentes />
      </Layout>
    </>
  );
}