import Image from "next/image";
import Link from "next/link";

export default function Featured() {
  return (
    <>
      <div
        id="featured"
        className="bg-gray-950 py-12 md:px-4 px-4 sm:px-6 mb-6"
      >
        <div className="flex flex-col-reverse lg:flex-row ">
          <div className="lg:pr-10">
            <div className="text-xl text-gray-400 font-medium">Destaque</div>
            <div className="text-3xl text-gray-200 ">Alchymist Beach Club</div>
            <div className=" text-lg mt-2 text-gray-300 font-medium">
              Qualidade 5 estrelas
            </div>

            <div className="text-lg md:text-xl text-justify text-gray-200 font-medium mt-4">
              <p>
                Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor
                sit Lorem ipsum dolor sit consectetur . ad, comode, fugit
                temporal rem ex do lorem face dolores. Lorem ipsum dolor sit
                Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor
                sit consectetur . ad, comode, fugit temporal rem ex do lorem
                face dolores{" "}
              </p>
              <br />
              <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
            </div>

            <div className="mt-8 ">
              <Link
                rel="nofollow"
                href="https://wa.link/5xww13"
                target="_blank"
                className="cursor-pointer flex flex-row items-center h-12 bg-yellow-400 rounded-md w-52"
              >
                <Image
                  src="/whatsapp.png"
                  width={68}
                  height={68}
                  alt="whatsapp"
                  priority
                  className=" md:h-16 h-16  mr-0 flex flex-row"
                />
                <p className="font-bold">Solicitar Reserva</p>
              </Link>
            </div>
          </div>
          <div className=" lg:ml-4 mb-2 md:mb-0 lg:mb-0 flex-shrink-0 md:w-3/5 md:h-[420px] flex justify-center">
            <Image
              src="/banner8.jpg"
              alt="Imagem destaque"
              width={768}
              height={240}
              priority
              className=" md:ml-auto mb-2 md:mb-0 md:px-4 flex-shrink-0 md-w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
