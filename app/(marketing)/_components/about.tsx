"use client";
import Typewriter from 'typewriter-effect';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Heroes } from './heroes';
import Image from 'next/image';
import WhatWeDo from './whatwedo';
import Teams from './teams';

export const About = () => {
    return (
        <div className="snap-y snap-mandatory overflow-auto flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
            <div className="snap-always snap-start max-w-3xl space-y-4">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Welcome to Minerva.')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .start();
                        }}
                    />
                </h1>

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-normal">
                    Your Ideas, Documents & Plans. Unified.
                </h1>

                <h3 className="text-base sm:text-xl md:text-2xl font-thin">
                    Minerva is the connected workspace where <br />
                    better, faster work happens.
                </h3>
                <Button>
                    Enter Minerva
                    <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
            </div>
            <div className="snap-always snap-start max-w-3xl space-y-4">
                <Heroes />
            </div>
            <div className="snap-always snap-start max-w-3xl space-y-4">
                <WhatWeDo />
            </div>
            <div className="snap-always snap-start bg-white dark:bg-[#1F1F1F] py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold text-black dark:text-white mb-8">
                    Our Mission
                </h1>

                <div className="flex flex-wrap -mx-8">
                    <div className="w-full md:w-1/2 px-8">
                        <h2 className="text-2xl font-semibold text-black dark:text-white mb-4 text-left">
                            Subheading
                        </h2>
                        <p className="text-black dark:text-white text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 px-8 mb-8 md:mb-0">
                        <Image
                            src="/documents.png"
                            alt="Description of image"
                            width={500}
                            height={500}
                            className="rounded-lg dark:hidden"
                        />
                        <Image
                            src="/documents-dark.png"
                            alt="Description of image"
                            width={500}
                            height={500}
                            className="rounded-lg hidden dark:block"
                        />
                    </div>
                </div>
            </div>
            {/*<div className="snap-always snap-start py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold text-white mb-8">
                    Minerva
                </h1>

                <div className="flex flex-wrap -mx-8">
                    <div className="w-full md:w-1/2 px-8 mb-8 md:mb-0">
                        <Image
                            src="/reading-dark.png"
                            alt="Description of image"
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </div>

                    <div className="w-full md:w-1/2 px-8">
                        <h2 className="text-2xl font-semibold text-white mb-4 text-left">
                            Subheading
                        </h2>
                        <p className="text-white text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        </p>
                    </div>
                </div>
            </div>*/}
            <div className="snap-always snap-start py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <Teams />
            </div>

        </div>
    )
}
