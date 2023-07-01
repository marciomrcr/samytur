import Image from "next/image";
import Link from "next/link";

export default function Featured() {
  return (
    <div className="md:flex md:items-center md:justify-center md:flex-row">
      <div id="featured" className="bg-gray-950">
        {/* <div className="flex flex-col-reverse md:flex-row  "> */}
        <div className="">
          <h2 className="text-xl text-gray-400 font-medium">Destaque</h2>
          <h1 className="text-3xl text-yellow-400 ">Excursão Mini Nordeste</h1>
          <h3 className=" text-md mt-2 text-blue-300 font-medium">
            Qualidade 5 estrelas
          </h3>

          <div className="text-lg md:text-xl text-justify text-gray-200 font-medium mt-4 md:w-1/2 ">
            <h1>Incluso no pacote:</h1>
            <p className="pb-2">
              Transporte em ônibus de luxo Double Deck (2 andares), equipado
              com: <br /> * Sala de jogos * DVD * TV * Som ambiente * Frigobar *
              Ar-condicionado * Toalete.
            </p>
            <p className="pb-2">
              Hospedagem em hotel 3 estrelas com direito a: <br /> * Café da
              manhã * Serviço de bordo * Água * Refrigerante * Café * Biscoito *{" "}
              <span className="font-semibold">Sorteio de brindes</span>
            </p>
            <div className="m-4  ">
              <Link
                rel="nofollow"
                href="https://wa.link/5xww13"
                target="_blank"
                className="cursor-pointer flex flex-row justify-center items-center h-12 bg-yellow-400 rounded-md w-56 md:w-[236px] md:pr-2"
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
            <p className=" flex items-center justify-center font-semibold  bg-red-600 text-yellow-400 px-2 py-2 rounded-sm md:w-1/2">
              Na compra de qualquer pacote de excursão não efetuamos devolução
              total ou parcial do valor pago.{" "}
            </p>
          </div>
        </div>

        <div className=" mb-2 md:mb-0 flex-shrink-0 md:w-full md:h-[420px] flex justify-center">
          <Image
            src="/mini-nordeste.jpeg"
            alt="Imagem destaque"
            width={480}
            height={240}
            priority
            className=" md:ml-auto mb-2 md:mb-0 md:px-4 flex-shrink-0 md-w-full"
          />
        </div>
      </div>
    </div>
  );
}
