import HelpSection from "@/components/help";
import Intro from "@/components/intro";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <HelpSection />
    </main>
  );
}
