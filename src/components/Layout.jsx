import { NavBar } from "@/components/Home/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <br></br>o footer vem aqui
    </>
  );
}