import { company_info, contact, faqs } from "@/lib/data";
import { AppDisclosure } from "./disclosure";
import React from "react";
import { AppButton } from "./button";
import Image from "next/image";
import Logo from "@/public/docuLogo.svg";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const HelpSection = () => (
  <section className="flex md:min-h-[900px] self-stretch justify-center">
    <div className="md:min-h-[558px] md:min-w-[706px] md:mt-[148px] flex flex-col justify-start items-center gap-[72px]">
      <h3 className="font-black text-[64px] leading-[89.6px] text-brand01">
        Why Docuhelp?
      </h3>
      <div className="flex flex-col gap-[48px] self-stretch">
        {faqs.map((content, index) => (
          <React.Fragment key={index}>
            <AppDisclosure {...content} />
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export const Footer = () => {
  return (
    <div className="flex flex-col justify-start items-center self-stretch">
      <HelpSection />
      <footer className="flex flex-col bg-[#0D0C0D] self-stretch text-white md:min-h-[567px] border-t">
        <div className="flex items-start justify-start md:px-56 md:mt-[136px] md:mb-[80px] gap-20">
          <div className="md:min-w-[378px] flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[24px]">
              <h4 className="font-bold md:text-[40px] text-3xl md:leading-[48.28px] w-[291px]">
                Stay In Touch With Us
              </h4>
              <p className="">
                The latest Docuhelp news, articles, and resources,
                <br /> sent straight to your inbox every month.
              </p>
            </div>
            <div className="md:w-[349px] flex gap-2 p-[8px_16px] border rounded-lg border-brand01 bg-[#EDEBFE] justify-between">
              <input
                placeholder="Email Address"
                className="bg-transparent outline-none text-gray01"
              />
              <AppButton
                name="Subscribe"
                className="rounded-[4px] p-[8px_14px]"
              />
            </div>
          </div>
          <div className="flex gap-[58px] w-full">
            <div className="flex flex-col gap-[24px] md:min-w-[128px]">
              <h6 className="font-bold text-lg leading-[25.2px]">Company</h6>
              <ul className="flex flex-col gap-[14px]">
                {company_info.map((content, index) => (
                  <React.Fragment key={index}>
                    <li className="">{content}</li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[24px] md:min-w-[243px]">
              <h6 className="font-bold text-lg leading-[25.2px]">Contact Us</h6>
              <ul className="flex flex-col gap-[14px]">
                {contact.map((content, index) => (
                  <React.Fragment key={index}>
                    <li className="flex gap-[8px] items-center">
                      <span>{content.icon}</span>
                      <span>{content.title}</span>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[19px]">
              <div className="w-[132px] flex gap-[8px] items-center">
                {/** logo */}
                <Image
                  src={Logo}
                  alt="logo"
                  quality={95}
                  className="w-[57px] h-[63px]"
                />
                <span className="text-[#4435F6] font-bold text-2xl leading-[28.97px]">
                  docuhelp.ai
                </span>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h6 className="font-bold">Write business documents.</h6>
                <p className="w-[407px] font-light">
                  DocuHelp may produce inaccurate information about people,
                  places, or facts and may also display inaccurate or offensive
                  information that doesn’t represent 3d7 Technologies views.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-[#99999980]" />
        <div className="px-56 flex-grow flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Image src={Logo} alt="logo" className="w-[32px] h-[32px]" />
            <span className="text-[13px] leading-[12px]">
              © 2023 docuhelp.ai | Security | Your Privacy | Terms
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <IoLogoLinkedin size={24} />
            <IoLogoFacebook size={24} />
            <IoLogoInstagram size={24} />
            <IoLogoTwitter size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
};
