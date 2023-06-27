/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Footer() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center pt-1 mx-auto mt-2 mb-0 h-40 w-full border border-slate-200"
    >
      <div className="py-2 px-4 sm:px-6 mb-2">
        <h2 className="text-white text-lg font-semibold flex items-center justify-center ">
          Siga nossas redes
        </h2>
        <ul className="flex items-center justify-center ">
          <li className=" mx-4 ">
            <a href="#" className=" wow bounceIn" data-wow-delay="0.3s">
              <img src="/facebook.png" alt="Facebook" width={30} />
            </a>
          </li>

          <li className=" mx-4 ">
            <a href="#" className="wow bounceIn" data-wow-delay="0.9s">
              <img src="/instagram.png" alt="instagram" width={30} />
            </a>
          </li>
          <li className=" mx-4 ">
            <a
              href="#"
              className="
                 wow bounceIn"
              data-wow-delay="0.9s"
            >
              <img src="/youtube.png" alt="youtube" width={30} />
            </a>
          </li>
        </ul>
      </div>{" "}
      <div>
        <a href="/">
          <Image src="/samy-tur.png" alt="Logo" height={68} width={128} />
        </a>
      </div>
      <div className="text-yellow-500">
        <p>
          Copyright ©2023 Samy Tur | Design: {/* https://wa.link/5xww13 */}
          <a rel="nofollow" href="https://wa.link/f53gui" target="_blank">
            Marcinho
          </a>
        </p>{" "}
      </div>
    </div>
  );
}
