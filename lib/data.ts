import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/project1.png";
import rmtdevImg from "@/public/project2.png";
import wordanalyticsImg from "@/public/project3.png";

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
