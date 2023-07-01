"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { register } from "swiper/element/bundle";
import About from "./components/About";
import Banner from "./components/Banner";
import CarouselComponent from "./components/CarouselComponent";
import NextTrip from "./components/NextTrip";
import Gallery from "./components/gallery/page";

register();

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <CarouselComponent />

      <NextTrip />
      <About />
      <Gallery />
    </main>
  );
}
