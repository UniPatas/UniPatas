import { NavBar } from "@/components/Home/NavBar";
import { Footer } from "./Home/Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}