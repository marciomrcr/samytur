import { Inter } from "next/font/google";
// import Header from "./components/Header";
import About from "./components/About";
import Banner from "./components/Banner";
import CarouselComponent from "./components/CarouselComponent";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import ResortsGrid from "./components/ResortsGrid";
import TopIcon from "./components/TopIcon";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <Banner />
        <CarouselComponent />
        <Featured />
        <ResortsGrid />
        <About />

        <TopIcon />
        <Footer />
        {/* {children} */}
      </body>
    </html>
  );
}
