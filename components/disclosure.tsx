"use client";

import { faqs } from "@/lib/data";
import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";
import { ArrowDown2 } from "iconsax-react";
import { motion } from "framer-motion";

type DisclosureNameType = (typeof faqs)[number]["title"];

type DisclosurePropType = { title: DisclosureNameType; content: string }; // example of either making it dynamic to accept data from server or static

export const AppDisclosure = ({ title, content }: DisclosurePropType) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div
          className="border w-full rounded-xl p-[33px_40px] flex flex-col gap-[8px] bg-brand03 border-brand01"
          id="pa"
        >
          <Disclosure.Button className="flex w-full justify-between items-center font-bold md:text-2xl text-xl text-brand-black">
            <span>{title}</span>
            <ArrowDown2
              className={clsx(
                "font-black transition-transform duration-500 ease-in-out",
                {
                  "rotate-180 transform": open,
                }
              )}
            />
          </Disclosure.Button>

          <Disclosure.Panel className="font-medium md:text-lg md:w-[600px]">
            {content}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};
