// import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import TopIcon from "./components/TopIcon";
import "./globals.css";

export const metadata = {
  title: "Samy Tur",
  description: "A sua viagem começa com a gente!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className=" bg-slate-900 transition-all duration-500">
      <body className="container max-w-full bg-black">
        <Menu />
        {children}
        <TopIcon />
        <Footer />
        {/* {children} */}
      </body>
    </html>
  );
}
