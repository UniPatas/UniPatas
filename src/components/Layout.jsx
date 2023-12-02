import { NavBar } from "@/components/Home/NavBar";
import { Footer } from "./Home/Footer";
import ChatBot from "./Home/ChatBot/ChatBot";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <ChatBot />
      <Footer />
      <div id="modal-root"></div>
 
    </>
  );
} 
