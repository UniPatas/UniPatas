import { ComponenteForum } from "@/components/Home/ComponenteForum";
import { SliderOngs } from "@/components/Home/SliderOngs/SliderOngs";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <SliderOngs />

        <ComponenteForum />
      </Layout>
    </>
  );
}
