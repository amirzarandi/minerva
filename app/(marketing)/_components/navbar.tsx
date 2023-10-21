"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";
import BigLogo from "../../../public/biglogo.png";
import BigLogoBlack from "../../../public/biglogoblack.png";
import Image from "next/image";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="hidden md:flex justify-between items-center flex-grow"> {/* Use justify-between */}
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <div className="flex items-center justify-between w-full"> {/* Align items and justify to the right */}
            <div className="flex items-center"> {/* Align items to the center */}
              <Image
                src={BigLogoBlack}
                height="50"
                width="200"
                alt="Logo"
                className="dark:hidden"
              />
              <Image
                src={BigLogo}
                height="50"
                width="200"
                alt="Logo"
                className="hidden dark:block"
              />
            </div>
            <div className="flex items-center space-x-4"> {/* Add spacing between elements */}
              <ModeToggle />
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button size="sm">
                  Get Minerva free
                </Button>
              </SignInButton>
            </div>
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <div className="flex items-center justify-between w-full"> {/* Align items and justify to the right */}
            <div className="flex items-center"> {/* Align items to the center */}
              <Image
                src={BigLogoBlack}
                height="50"
                width="200"
                alt="Logo"
                className="dark:hidden"
              />
              <Image
                src={BigLogo}
                height="50"
                width="200"
                alt="Logo"
                className="hidden dark:block"
              />
            </div>
            <div className="flex items-center space-x-4"> {/* Add spacing between elements */}
              <ModeToggle />
              <Button variant="ghost" size="sm" asChild>
                <Link href="/documents">
                  Enter Minerva
                </Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
