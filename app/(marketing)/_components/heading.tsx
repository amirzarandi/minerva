"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents & Plans. Unified. Welcome to <span className="underline">Minerva</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Minerva is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <Link href="/documents" passHref>
        <Button className="flex items-center space-x-2">
          <span>Enter Minerva</span>
        </Button>
      </Link>
    </div>
  )
}
