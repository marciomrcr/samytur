/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Transition } from "react-transition-group";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const duration = 200;

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Excursões", link: "#excursion" },
    { text: "Réveillon", link: "" },
    { text: "Julho", link: "" },
    { text: "Sobre nós", link: "#about" },
    { text: "Viagens anteriores", link: "#" },
    { text: "Contato", link: "#contact" },
  ];

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: { [key: string]: object } = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <>
      <div id="home">
        <div className="bg-black/70">
          <nav className="bg-blue-950 shadow-lg">
            <div className="max-w-full bg-black mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 w-36  flex items-center">
                    <a href="/">
                      <Image
                        src="/samy-tur.png"
                        alt="Logo"
                        height={68}
                        width={148}
                        className="block lg:hidden"
                      />
                      <Image
                        src="/samy-tur.png"
                        alt="Logo"
                        height={68}
                        width={148}
                        className="hidden lg:block"
                      />
                    </a>
                  </div>
                  <div className="hidden lg:flex lg:items-center lg:ml-6">
                    {menuItems.map((item) => (
                      <a
                        key={item.text}
                        href={item.link}
                        className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-yellow-500 "
                        onClick={closeMenu}
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="-mr-2 flex items-center lg:hidden">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500  focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    onClick={toggleMenu}
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      {isOpen ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {isOpen && (
              <Transition in={isOpen} timeout={duration}>
                {(state) => (
                  <div
                    className="lg:hidden"
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                  >
                    <div className="px-2 pt-2 pb-3 sm:px-3">
                      {menuItems.map((item) => (
                        <a
                          key={item.text}
                          href={item.link}
                          className="block px-3 py-2 rounded text-base font-medium text-slate-200 bg-transparent hover:text-yellow-500 hover:bg-gray-700"
                          onClick={closeMenu}
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </Transition>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
