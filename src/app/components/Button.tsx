import { ReactNode } from "react";

interface PropsButton {
  title: string;
  svg?: ReactNode;
}

export default function Button({ title, svg }: PropsButton) {
  return (
    <>
      <button className="flex text-sm font-bold hover:bg-green-500 sm:text-xs md:text-xs lg:text-xs overflow-hidden text-gray-900 bg-yellow-400  py-2  my-2 pr-2 rounded">
        <a
          href="#contact"
          className="inline-flex px-3 items-center pr-1 justify-center"
        >
          {" "}
          {title}
        </a>
        {svg}
      </button>
    </>
  );
}
