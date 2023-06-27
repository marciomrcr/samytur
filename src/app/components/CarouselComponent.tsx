/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent: React.FC = () => {
  return (
    <div className="border-2 border-gray-300 mb-2">
      <Carousel
        showArrows={true}
        showStatus={true}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        emulateTouch={true}
        interval={3000}
        transitionTime={500}
        showThumbs={false}
        width="100%"
        // centerMode={true}
        autoFocus={true}
      >
        <div className="h-[360px] md:h-[620px] ">
          <Image
            src="/banner2.jpg"
            alt="Slide 1"
            fill
            className=" h-[380px] md:h-[620px]  "
          />
          <p className="text-center">Copacabana</p>
        </div>

        <div className="h-[360px] md:h-[620px]">
          <Image
            src="/banner3.jpg"
            alt="Slide 1"
            fill
            className="h-[380px] md:h-[620px]"
          />
          <p className="text-center">Slide 2</p>
        </div>

        <div className="h-[360px] md:h-[620px]">
          <Image
            src="/banner4.jpg"
            alt="Slide 1"
            fill
            className="h-[380px] md:h-[620px]   "
          />
          <p className="text-center">Slide 3</p>
        </div>

        <div className="h-[360px] md:h-[620px]">
          <Image
            src="/banner5.jpg"
            alt="Slide 1"
            fill
            className="h-[380px] md:h-[620px]   "
          />
          <p className="text-center font-black">Slide 3</p>
        </div>

        <div className="h-[360px] md:h-[620px]">
          <Image
            src="/banner6.jpg"
            alt="Slide 1"
            fill
            className="h-[380px] md:h-[620px]   "
          />
          <p className="text-center">Slide 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
