"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Connect", href: "#connect" },
  ];

  return (
    <div className="fixed md:hidden top-0 right-0 z-50 flex flex-col">
      <Image
        className="mt-8 mx-8"
        src="/hamburger-menu.svg"
        width={30}
        height={30}
        alt="hamburger menu"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      ></Image>
      {isOpen ? (
        <ul className="fixed top-0 right-0 mx-2 my-18">
          <nav className="">
            {navItems.map((item) => (
              <li className="" key={item.name}>
                <a
                  href={item.href}
                  className="text-white hover:text-blue-400 transition-color duration-300 transform inline-block text-md font-medium tracking-wider"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </nav>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
