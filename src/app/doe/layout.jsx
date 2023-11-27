import Layout from "@/components/Layout";
import NavigateToHome from "@/components/Doe/NavigateToHome";

export default function DoeLayout() {
  return (
    <>
      <Layout>
        <NavigateToHome
          tela="Doe"
          rota="doe"
        />
      </Layout>
    </>
  );
}
