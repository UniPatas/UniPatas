import { ContainerAnuncio } from "@/components/Home/ContainerAnuncio";
import { SliderOngs } from "@/components/Home/SliderOngs/SliderOngs";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <SliderOngs />
        <ContainerAnuncio />
      </Layout>
    </>
  );
}
