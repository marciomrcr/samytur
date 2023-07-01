/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";

export default function MiniNordeste() {
  return (
    <div>
      <div
        id="mini-nordeste"
        className="border border-yellow-300 my-2 py-2 px-2 rounded-md"
      >
        <h2 className="text-md md:text-xl text-gray-300 text-center font-medium">
          Destaque
        </h2>
        <h3 className="text-xl md:text-3xl text-yellow-300 font-semibold text-center mb-4">
          Excursão Mini Nordeste
        </h3>
        <h2 className="text-xl text-slate-300 font-semibold text-center mb-4">
          20 à 31 de Julho/23
        </h2>
        {/* md:grid-cols-2 md:grid-cols-3 */}
        <h3 className=" text-sm md:text-md mt-2 text-blue-300 font-medium text-center">
          Qualidade ⭐⭐⭐⭐⭐
        </h3>
        <div></div>
        <div className="flex flex-col md:flex md:flex-col items-center text-md md:text-xl text-gray-200 font-medium mt-4 md:w-full ">
          <h1>Incluso no pacote:</h1>
          <p className="pb-2" text-md>
            Transporte em ônibus de luxo Double Deck (2 andares), equipado com:{" "}
          </p>
          <p className="pb-2" text-md>
            * Sala de jogos * DVD * TV * Som ambiente * Frigobar *
            Ar-condicionado * Toalete.
          </p>

          <p className="pb-2 text-md">
            Hospedagem em hotel 3 estrelas com direito a: <br />{" "}
          </p>
          <p>
            * Café da manhã * Serviço de bordo * Água * Refrigerante * Café *
            Biscoito *<span className="font-semibold">Sorteio de brindes</span>
          </p>
          <div className=" my-2">
            <Link
              rel="nofollow"
              href="https://wa.link/5xww13"
              target="_blank"
              className="cursor-pointer flex flex-row justify-center items-center h-12 bg-yellow-400 rounded-xl w-56 md:w-[236px] md:pr-2"
            >
              <Image
                src="/whatsapp.png"
                width={68}
                height={68}
                alt="whatsapp"
                priority
                className=" md:h-16 h-16  mr-0 flex flex-row"
              />
              <p className="font-semibold text-black ">Solicitar Reserva</p>
            </Link>
          </div>
          <p className="text-sm flex items-center justify-center font-semibold mb-2 bg-red-600 text-yellow-300 px-2 py-2 rounded-sm ">
            Na compra de qualquer pacote de excursão não efetuamos devolução
            total ou parcial do valor pago.{" "}
          </p>
        </div>

        <div
          className=" md:grid md:grid-cols-5
          md:grid-row-4 md:gap-4 md:space-y-0 space-y-4 rounded-md overflow-hidden"
        >
          <div className=" relative md:col-span-3 md:row-span-2 rounded-md overflow-hidden ">
            <div className="absolute  text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 1
            </div>

            <img
              src="/miniNordeste/Maragogi.jpg"
              alt=""
              className="w-full h-full cursor-pointer transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            />
          </div>

          <div className="relative md:col-span-2  h-72 rounded-md overflow-hidden">
            <div className="absolute text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 2
            </div>
            <img
              src="/miniNordeste/praia-carneiros.jpg"
              alt="praia dos carneiros"
              className="w-full h-full object-cover cursor-pointer transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            />
          </div>

          <div className="relative md:col-span-2 rounded-md overflow-hidden">
            <div className="absolute text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 3
            </div>
            <img
              src="/miniNordeste/pontalMaracaipe.jpg"
              alt="pontal de Maracaipe"
              className="w-full h-full object-cover cursor-pointer transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            />
          </div>

          <div className=" relative md:col-span-2 rounded-md overflow-hidden">
            <div className="absolute text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 4
            </div>
            <img
              src="/miniNordeste/pernambuco.jpg"
              alt="Pernambuco"
              className="w-full h-full object-cover cursor-pointer transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            />
          </div>

          <div className=" relative md:col-span-3 rounded-md overflow-hidden ">
            <div className="absolute  text-white font-bold bottom-0 pl-4 pb-4">
              Imagem 1
            </div>

            <img
              src="/miniNordeste/porto-galinhas.jpg"
              alt=""
              className="w-full h-full cursor-pointer transform hover:translate-y-2 hover:shadow-xl transition duration-300"
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
