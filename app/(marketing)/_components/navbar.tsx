"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import BigLogo from "../../../public/biglogo.png"
import BigLogoBlack from "../../../public/biglogoblack.png"
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-background fixed top-0 flex items-center justify-between w-full p-6", scrolled && "border-b shadow-sm"
    )}>
      {/*<Logo />*/}

      <div className="hidden md:flex justify-center items-center flex-grow">
        <Image
          src={BigLogoBlack}
          height='50'
          width='200'
          alt="Logo"
          className="dark:hidden"
        />
        <Image
          src={BigLogo}
          height='50'
          width='200'
          alt="Logo"
          className="hidden dark:block"
        />
      </div>

      <div className="flex items-center justify-end">
        <ModeToggle />
      </div>
    </div>
  );
}
