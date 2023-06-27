/* eslint-disable @next/next/no-img-element */

export default function About() {
  return (
    <div>
      <div
        id="about"
        className="bg-gray-700 md:px-4b md:py-2  px-4 sm:px-6 md:mb-6"
      >
        <h3 className="text-3xl text-white font-semibold text-center md:py-6 md:px-2 py-6">
          Sobre nós
        </h3>
        {/* md:grid-cols-2 lg:grid-cols-3 */}
        <div className=" rounded-md overflow-hidden">
          <div className="relative h-60 md:h-[500px] rounded-md overflow-hidden">
            <div className="absolute text-white font-bold bottom-0 pl-4 pb-4">
              Viagem conosco
            </div>

            <img
              src="/blog-image1.jpg"
              alt=""
              className="w-full object-contain"
            />
          </div>
          <div className="relative h-96 rounded-md overflow-hidden">
            <div className="absolute text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 2
            </div>
            <img
              src="/blog-image2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
