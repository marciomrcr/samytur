/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

interface DataProps {
  id: string;
  image: string;
}

const data: DataProps[] = [
  { id: "1", image: "/Samara.jpg" },
  { id: "2", image: "/Samara.jpg" },
  { id: "3", image: "/Samara.jpg" },
  { id: "4", image: "/Samara.jpg" },
];

export const Slider: React.FC = () => {
  return (
    <div
      className=" max-w-3xl my-0 text-center
       p-4 mx-auto mt-0 mb-2 h-auto w-full border border-slate-200
  "
    >
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {/* <img src={item.image} alt="Slider" /> */}
            <Image
              src={item.image}
              alt="Slider"
              width={1024}
              height={480}
              priority
              className="w-screen "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
