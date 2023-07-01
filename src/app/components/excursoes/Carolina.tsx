/* eslint-disable @next/next/no-img-element */

export default function Carolina() {
  return (
    <div className="border border-yellow-300 my-2 rounded-md">
      <div id="excursion" className="bg-gray-700 py-10 px-4 sm:px-6 mb-6">
        <h3 className="text-2xl text-white font-semibold text-center mb-8">
          Excursão Carolina - Maranhão
        </h3>
        <h2 className="text-xl text-slate-300 font-semibold text-center mb-8">
          06 à 10 de Setembro
        </h2>
        {/* md:grid-cols-2 md:grid-cols-3 */}

        <div
          className=" md:grid md:grid-cols-4
          md:grid-row-1 md:gap-4 md:space-y-0 space-y-4 rounded-md overflow-hidden"
        >
          <div className=" relative md:col-span-2 md:row-span-2 rounded-md overflow-hidden ">
            <div className="absolute  text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 1
            </div>

            <img
              src="/carolina/pedra-caida.jpg"
              alt=""
              className="w-full h-full cursor-pointer transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            />
          </div>
          <div className="relative md:col-span-2 h-72 rounded-md overflow-hidden">
            <div className="absolute text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 2
            </div>
            <img
              src="/carolina/poco-azul.jpg"
              alt=""
              className="w-full h-full object-cover cursor-pointer transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            />
          </div>
          <div className="relative rounded-md overflow-hidden">
            <div className="absolute text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 3
            </div>
            <img
              src="/carolina/chapada.jpeg"
              alt="Pesquisar"
              className="w-full h-full object-cover cursor-pointer transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            />
          </div>
          <div className=" relative rounded-md overflow-hidden">
            <div className="absolute text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 4
            </div>
            <img
              src="/carolina/encanto-azul.png"
              alt="Pesquisar"
              className="w-full h-full object-cover cursor-pointer transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
