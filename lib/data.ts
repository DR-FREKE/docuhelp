import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuMail } from "react-icons/lu";
import { Sms, Location, Call } from "iconsax-react";

const size = 20;

/** for the purpose of this app, I am making most of the representational data a const; normally,
 * they are likely to come from a backend hence the type/interface for implementing the type definition
 * for some of the data might change
 */

export const links = [
  {
    name: "Support",
    hash: "#support",
  },
  {
    name: "Pricing",
    hash: "#pricing",
  },
] as const;

export const variants = ["outline", "bold"] as const;

export const faqs = [
  {
    title: "Industry Focused",
    content:
      "Backend Prompts can be focused mainly on your industry so results are more precise",
  },
  {
    title: "Access to Backends",
    content:
      "Access to a backend system to see what prompts staffs are sending and result generated",
  },
  {
    title: "Trained on your data",
    content:
      "Models can be built that's trained solely on your company data and documents. Analytics and fine tuning of models based on specific use cases",
  },
] as const;

export const company_info = ["3d7 Technologies", "Products", "Legal"];
export const contact = [
  { title: "help@docuhelp.ai", icon: React.createElement(Sms, { size }) },
  {
    title: "Manchester, United Kingdom",
    icon: React.createElement(Location, { size }),
  },
  { title: "+1 544312378", icon: React.createElement(Call, { size }) },
];
