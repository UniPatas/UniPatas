import { DestaqueAdocao } from "@/components/Home/DestaqueAdocao";
import { SliderOngs } from "@/components/Home/SliderOngs/SliderOngs";
import { SliderNoticia } from "@/components/Home/SliderNoticia/SliderNoticia";
import { ComponenteForum } from "@/components/Home/ComponenteForum";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <SliderNoticia />
        <DestaqueAdocao />
        <SliderOngs />
        <ComponenteForum />
      </Layout>
    </>
  );
}