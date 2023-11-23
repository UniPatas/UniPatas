import { DestaqueAdocao } from "@/components/DestaqueAdocao";
import { SliderOngs } from "@/components/Home/SliderOngs/SliderOngs";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <DestaqueAdocao />
        <SliderOngs />
      </Layout>
    </>
  );
}
