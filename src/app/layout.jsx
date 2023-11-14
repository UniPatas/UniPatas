import { Anybody } from "next/font/google";

const anybody = Anybody({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

export const metadata = {
  title: "UniPatas",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="pt-br">
        <body className={anybody.className}>{children}</body>
      </html>
    </>
  );
}
