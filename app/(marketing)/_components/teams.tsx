import React from 'react';
function Index() {
    return (
        <div className="">
            <div className="container flex justify-center mx-auto pt-4">
                <div>
                    <h1 className="font-custom xl:text-4xl text-3xl text-center text-black dark:text-white font-light pb-6 sm:w-4/6 w-5/6 mx-auto">
                        The Talent Behind Minerva
                    </h1>
                </div>
            </div>
            <div className="w-full  px-10 pt-10">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        <div className="xl:w-1/4 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img
                                            src="https://media.licdn.com/dms/image/D5635AQFR7loebaR2sA/profile-framedphoto-shrink_800_800/0/1696458145755?e=1698570000&v=beta&t=zrOb3JHqM3U5YOntBRoCz0juKKsOjwFC7SCebQl4rII"
                                            alt="dev"
                                            className="rounded-full object-cover h-full w-full shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="px-6 my-16">
                                    <div className="font-custom font-bold text-3xl text-center pb-1">
                                        Ali Ural
                                    </div>
                                    <p className="text-black dark:text-white text-sm text-center">
                                        Drexel University
                                    </p>
                                    <p className="text-center text-black dark:text-white text-base pt-3 font-normal">
                                        I am a student!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img
                                            src="https://media.licdn.com/dms/image/D4E03AQGrI2UMVKY5bQ/profile-displayphoto-shrink_800_800/0/1686839127372?e=1703721600&v=beta&t=86k896b8_yEsL2qCOovOGthow4AqPhUnp_-02RHPmhQ"
                                            alt="Dev"
                                            className="rounded-full object-cover h-full w-full shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="px-6 my-16">
                                    <div className="font-custom font-bold text-3xl text-center pb-1">
                                        Amir Zarandi
                                    </div>
                                    <p className="text-black dark:text-white text-sm text-center">
                                        Lawrence University
                                    </p>
                                    <p className="text-center text-black dark:text-white text-base pt-3 font-normal">
                                        I am a developer!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img
                                            src="https://media.licdn.com/dms/image/C4E03AQHv0dLuDC2W0g/profile-displayphoto-shrink_400_400/0/1593295687117?e=1703721600&v=beta&t=gwiQym2sj4pwWU7p0sXQPHJSBsfICZMz2C74OyTWd-Q"
                                            alt="dev"
                                            className="rounded-full object-cover h-full w-full shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="px-6 my-16">
                                    <div className="font-custom font-bold text-3xl text-center pb-1">
                                        Jonathan Yashayev
                                    </div>
                                    <p className="text-black dark:text-white text-sm text-center">
                                        CUNY Brooklyn College
                                    </p>
                                    <p className="text-center text-black dark:text-white text-base pt-3 font-normal">
                                        I am a full-stack developer from New York City, interested in accessible web design and artifical intelligence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="xl:w-1/4 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md ">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img
                                            src="https://media.licdn.com/dms/image/D4E03AQHB4oOGG6mRig/profile-displayphoto-shrink_800_800/0/1696088322395?e=1703721600&v=beta&t=-W5hIndbXcMcG3fn3LbXIB358UcNUDLWQMUoo45O7xI"

                                            className="rounded-full object-cover h-full w-full shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="px-6 my-16">
                                    <div className="font-custom font-bold text-3xl text-center pb-1">Anna Belenko</div>
                                    <p className="text-black dark:text-white text-sm text-center">
                                        CUNY Brooklyn College
                                    </p>
                                    <p className="text-center text-black dark:text-white text-base pt-3 font-normal">
                                        I am a second year Computer Science student from New York City, interested in UI/UX design and accessibiliy.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
