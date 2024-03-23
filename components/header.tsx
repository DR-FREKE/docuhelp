"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { clsx } from "clsx";
import { AppButton } from "./button";
import Image from "next/image";
import Logo from "@/public/docuLogo.svg";

export const Header = () => {
  const [active, setActive] = useState("Home");

  return (
    <header className="z-[999] sticky top-0 flex justify-center">
      <div
        className="bg-white top-0 h-[5rem] shadow-lg shadow-black/[0.03] w-full flex justify-between items-center border-b px-32"
        // initial={{ y: -100, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex gap-[32px] items-center">
          {/** div for logo and nav */}
          <div className="w-[132px] flex gap-[8px] items-center">
            {/** logo */}
            <Image src={Logo} alt="logo" quality={95} />
            <span className="text-[#4435F6] font-bold leading-[19.31px]">
              docuhelp.ai
            </span>
          </div>
          <nav className="flex">
            <ul className="flex gap-[32px]">
              {links.map((link) => (
                <li
                  key={link.hash}
                  className="flex justify-center items-center relative"
                  //   initial={{ y: -100, opacity: 0 }}
                  //   animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    onClick={() => setActive(link.name)}
                    className={clsx(
                      "flex justify-center font-normal text-[#0A0A0A] items-center w-full transition outline-none",
                      { "text-gray-950": active === link.name }
                    )}
                    href={link.hash}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex gap-[29px]">
          {/** for buttons */}
          <AppButton name="Get Started" />
          <AppButton
            name="Sign In"
            variant="outline"
            className="bg-brand02 md:w-[132px]"
          />
        </div>
      </div>
    </header>
  );
};
