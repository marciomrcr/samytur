import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    // Background hero
    <div className="bg-banner-hero h-[620px] md:h-[800px] border-2 border-gray-300 mb-2">
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl p-4 text-white bg-black/50 font-semibold">
            Samy Tur, sua viagem começa aqui!
          </h1>
        </div>

        <Link rel="nofollow" href="https://wa.link/5xww13" target="_blank">
          <div className="mt-8 cursor-pointer flex flex-row items-center h-12 bg-yellow-400 rounded-md w-60">
            <Image
              src="/whatsapp.png"
              width={68}
              height={68}
              alt="Pesquisar"
              className="w-16 md:h-16 h-16  mr-0 flex flex-row"
            />
            Agende a sua viagem
          </div>
        </Link>
      </div>{" "}
    </div>
  );
}
