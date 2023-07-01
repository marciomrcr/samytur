/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-sync-scripts */
import { galley1, galley2, galley3, galley4 } from "@/app/data/index";
export default function Gallery() {
  return (
    <div>
      <div id="gallery" className=" bg-gray-950 px-0 py-4 ">
        <h3 className="mb-4 text-center text-2xl font-semibold text-white">
          Galeria de imagens
        </h3>
        {/* md:grid-cols-2 md:grid-cols-3 */}
        <div
          className=" flex-row pb-2
           md:flex  md:gap-4 "
        >
          {galley1.map((item) => (
            <div key={item.id} className=" flex items-center justify-center  ">
              <img
                src={item.image}
                alt="Pesquisar"
                className="pb-2 h-full w-[96%] transform cursor-pointer rounded-md object-cover transition duration-300 hover:translate-y-2 hover:shadow-xl"
              />
            </div>
          ))}
        </div>

        <div
          className=" flex-row pb-2 overflow-hidden 
           md:flex  md:gap-4 "
        >
          {galley2.map((item) => (
            <div key={item.id} className=" flex items-center justify-center  ">
              <img
                src={item.image}
                alt="Pesquisar"
                className="pb-2 h-full w-[96%] transform cursor-pointer rounded-md object-cover transition duration-300 hover:translate-y-2 hover:shadow-xl"
              />
            </div>
          ))}
        </div>

        <div
          className=" flex-row pb-2 overflow-hidden 
           md:flex  md:gap-4 "
        >
          {galley3.map((item) => (
            <div key={item.id} className=" flex items-center justify-center  ">
              <img
                src={item.image}
                alt="Pesquisar"
                className="pb-2 h-full w-[96%] transform cursor-pointer rounded-md object-cover transition duration-300 hover:translate-y-2 hover:shadow-xl"
              />
            </div>
          ))}
        </div>

        <div
          className=" flex-row pb-2 overflow-hidden 
           md:flex  md:gap-4 "
        >
          {galley4.map((item) => (
            <div key={item.id} className=" flex items-center justify-center  ">
              <img
                src={item.image}
                alt="Pesquisar"
                className="pb-2 h-full w-[96%] transform cursor-pointer rounded-md object-cover transition duration-300 hover:translate-y-2 hover:shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    //<Image
    // src="/blog-image1.jpg"
    // width={26}
    // height={26}
    // alt="Pesquisar"
    // className="sm:w-h-2"
    // />
    // <Image
    // src="/blog-image2.jpg"
    // width={26}
    // height={26}
    // alt="Pesquisar"
    // className="sm:w-h-2"
    // />
    // <Image
    // src="/blog-image3.jpg"
    // width={26}
    // height={26}
    // alt="Pesquisar"
    // className="sm:w-h-2"
    // />
    // <Image
    // src="/blog-image4.jpg"
    // width={26}
    // height={26}
    // alt="Pesquisar"
    // className="sm:w-h-2"
    // />
  );
}
