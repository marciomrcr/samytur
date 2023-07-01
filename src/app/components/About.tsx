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
        <div className=" rounded-md overflow-hidden md:h-auto">
          <div className="relative h-60 md:h-[680px] rounded-md overflow-hidden">
            <div className="absolute text-yellow-400 font-bold bottom-0 pl-4 pb-4">
              <h1></h1>
            </div>

            <img
              src="/about.jpg"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="relative h-60 md:h-[680px] rounded-md overflow-hidden">
            <div className="absolute text-yellow-400 font-bold bottom-0 pl-4 pb-4">
              <h1></h1>
            </div>

            <img
              src="/about2.jpg"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
