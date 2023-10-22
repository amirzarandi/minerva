"use client";

import { ChevronsLeftRight } from "lucide-react";
import { useUser, SignOutButton } from "@clerk/clerk-react";

import {
  Avatar,
  AvatarImage
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import BigLogoBlack from "../../../public/biglogoblack.png"
import BigLogo from "../../../public/biglogo.png"
import Link from "next/link";

export const UserItem = () => {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <div className="flex justify-center items-center mb-2 px-10 pt-5"> 
        <Link className="flex items-center" href="/">
          <Image
            src={BigLogoBlack}
            height="100"
            width="100"
            alt="Logo"
            className="dark:hidden"
          />
          <Image
            src={BigLogo}
            height="100"
            width="100"
            alt="Logo"
            className="hidden dark:block"
          />
        </Link>
      </div>
      <DropdownMenuTrigger asChild>
        <div role="button" className="flex items-center text-sm p-3 w-full hover:bg-primary/5 flex-col"> 
          <div className="gap-x-2 flex items-center max-w-[200px]"> 
            <Avatar className="h-5 w-5">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              {user?.username}&apos;s Minerva
            </span>
            <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4 mt-2" /> 
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            {user?.emailAddresses[0].emailAddress}
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.imageUrl} />
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="text-sm line-clamp-1">
                {user?.username}&apos;s Minerva
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="w-full cursor-pointer text-muted-foreground">
          <SignOutButton>
            Log out
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>    </DropdownMenu>
  )
}
