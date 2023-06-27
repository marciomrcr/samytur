/* eslint-disable @next/next/no-img-element */

export default function ResortsGrid() {
  return (
    <div>
      <div id="excursion" className="bg-gray-700 py-10 px-4 sm:px-6 mb-6">
        <h3 className="text-2xl text-white font-semibold text-center mb-8">
          Sua Próximas Viagens
        </h3>
        {/* md:grid-cols-2 md:grid-cols-3 */}
        <div
          className=" md:grid md:grid-cols-4
          md:grid-row-2 md:gap-4 md:space-y-0 space-y-4 rounded-md overflow-hidden"
        >
          <div className=" relative md:col-span-2 md:row-span-2 rounded-md overflow-hidden ">
            <div className="absolute  text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 1
            </div>

            <img
              src="/banner7.jpg"
              alt=""
              className="w-full h-full cursor-pointer transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            />
          </div>
          <div className="relative md:col-span-2 h-72 rounded-md overflow-hidden">
            <div className="absolute text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 2
            </div>
            <img
              src="/banner9.jpg"
              alt=""
              className="w-full h-full object-cover cursor-pointer transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            />
          </div>
          <div className="relative rounded-md overflow-hidden">
            <div className="absolute text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 3
            </div>
            <img
              src="/banner10.jpg"
              alt="Pesquisar"
              className="w-full h-full object-cover cursor-pointer transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            />
          </div>
          <div className=" relative rounded-md overflow-hidden">
            <div className="absolute text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 4
            </div>
            <img
              src="/banner8.jpg"
              alt="Pesquisar"
              className="w-full h-full object-cover cursor-pointer transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            />
          </div>
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
