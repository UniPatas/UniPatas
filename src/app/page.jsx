import { DestaqueAdocao } from "@/components/Home/DestaqueAdocao";
import { Relatos } from "@/components/Home/Relatos";
import { SliderOngs } from "@/components/Home/SliderOngs/SliderOngs";

import { ComponenteForum } from "@/components/Home/ComponenteForum";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <DestaqueAdocao />
        <SliderOngs />
        <ComponenteForum />
        <Relatos />
      </Layout>
    </>
  );
}
