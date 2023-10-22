"use client";
import Typewriter from 'typewriter-effect';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Heroes } from './heroes';
import Image from 'next/image';
import WhatWeDo from './whatwedo';
import Teams from './teams';
import Link from "next/link";


export const About = () => {
    return (
        <div className="snap-y snap-mandatory overflow-auto flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
            <div className="snap-always snap-start max-w-3xl space-y-4">
                <h1 className="tracking-wider dark:text-[#46c8ff] text-[#0468BF] text-3xl sm:text-5xl md:text-6xl font-medium font-custom">
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

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-light">
                    Your Ideas, Documents & Plans. Unified.
                </h1>

                <h3 className="text-base sm:text-xl md:text-2xl font-light">
                    Minerva is the accessible workspace where <br />
                    better, faster work happens.
                </h3>
                <Link href="/documents" >
                    <Button className="my-4">
                        Enter Minerva
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </Link>
            </div>
            <div className="snap-always snap-start max-w-3xl space-y-4">
                <Heroes />
            </div>
            <div className="bg-gray-500 dark:bg-stone-700 mt-2 h-px"></div>


            <div className="snap-always snap-start max-w-3xl space-y-4">
                <WhatWeDo />
            </div>
            <div className="snap-always snap-start bg-stone-50 dark:bg-[#1F1F1F] py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="flex flex-wrap -mx-8">
                    <div className="w-full md:w-1/2 px-8">
                        <h2 className="font-custom flex justify-center py-5 dark:text-[#46c8ff] text-[#0468BF] sm:py-10 font-extralight sm:font-light text-xl sm:text-4xl">
                            Minerva's Mission
                        </h2>
                        <p className="pl-10 text-black dark:text-white text-left text-xl leading-loose">
                            Empowering the hearing-impaired community, our note-taking app seamlessly transcribes audio into text, revolutionizing the way you capture and organize your thoughts. Aptly named after the Roman Goddess, Minerva, known for her wisdom.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 px-8 mb-8 md:mb-0">
                        <Image
                            src="/writing.png"
                            alt="Description of image"
                            width={400}
                            height={400}
                            className="rounded-lg dark:hidden"
                        />
                        <Image
                            src="/writing-white.png"
                            alt="Description of image"
                            width={400}
                            height={400}
                            className="rounded-lg hidden dark:block"
                        />
                    </div>
                </div>
            </div>
            <div className="snap-always snap-start py-5 px-4 sm:px-6 lg:py-16 lg:px-8">
                <Teams />
            </div>
        </div>
    )
}
