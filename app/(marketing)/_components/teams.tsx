import React from 'react';

function Index() {
    return (
        <div className="bg-stone-100 dark:bg-stone-800">
            <div className="container mx-auto py-10">
                <h1 className="text-4xl font-custom font-light text-center text-black dark:text-white mb-10">
                    The Talent Behind Minerva
                </h1>
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white dark:bg-stone-900 rounded-lg overflow-hidden shadow-md">
                            <div className="p-6">
                                <img
                                    src="https://media.licdn.com/dms/image/D5635AQFR7loebaR2sA/profile-framedphoto-shrink_800_800/0/1696458145755?e=1698570000&v=beta&t=zrOb3JHqM3U5YOntBRoCz0juKKsOjwFC7SCebQl4rII"
                                    alt="Dev"
                                    className="mx-auto w-32 h-32 rounded-full object-cover shadow-md"
                                />
                                <div className="mt-4 text-center">
                                    <div className="text-xl font-bold text-black dark:text-white">Ali Ural</div>
                                    <div className="text-sm text-black dark:text-white">Drexel University</div>
                                    <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
                                        I am a second-year Computer Science student from Turkey, interested in back end, data science, and robotics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white dark:bg-stone-900 rounded-lg overflow-hidden shadow-md">
                            <div className="p-6">
                                <img
                                    src="https://media.licdn.com/dms/image/D4E03AQGrI2UMVKY5bQ/profile-displayphoto-shrink_800_800/0/1686839127372?e=1703721600&v=beta&t=86k896b8_yEsL2qCOovOGthow4AqPhUnp_-02RHPmhQ"
                                    alt="Dev"
                                    className="mx-auto w-32 h-32 rounded-full object-cover shadow-md"
                                />
                                <div className="mt-4 text-center">
                                    <div className="text-xl font-bold text-black dark:text-white">Amir Zarandi</div>
                                    <div className="text-sm text-black dark:text-white">Lawrence University</div>
                                    <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
                                        I am a third year Computer Science student from Iran, interested in cyber-physical interactions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white dark:bg-stone-900 rounded-lg overflow-hidden shadow-md">
                            <div className="p-6">
                                <img
                                    src="https://media.licdn.com/dms/image/C4E03AQHv0dLuDC2W0g/profile-displayphoto-shrink_400_400/0/1593295687117?e=1703721600&v=beta&t=gwiQym2sj4pwWU7p0sXQPHJSBsfICZMz2C74OyTWd-Q"
                                    alt="Dev"
                                    className="mx-auto w-32 h-32 rounded-full object-cover shadow-md"
                                />
                                <div className="mt-4 text-center">
                                    <div className="text-xl font-bold text-black dark:text-white">Jonathan Yashayev</div>
                                    <div className="text-sm text-black dark:text-white">CUNY Brooklyn College</div>
                                    <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
                                        I am a full-stack developer from New York City, interested in accessible web design and artifical intelligence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white dark:bg-stone-900 rounded-lg overflow-hidden shadow-md">
                            <div className="p-6">
                                <img
                                    src="https://media.licdn.com/dms/image/D4E03AQHB4oOGG6mRig/profile-displayphoto-shrink_800_800/0/1696088322395?e=1703721600&v=beta&t=-W5hIndbXcMcG3fn3LbXIB358UcNUDLWQMUoo45O7xI"
                                    alt="Dev"
                                    className="mx-auto w-32 h-32 rounded-full object-cover shadow-md"
                                />
                                <div className="mt-4 text-center">
                                    <div className="text-xl font-bold text-black dark:text-white">Anna Belenko</div>
                                    <div className="text-sm text-black dark:text-white">CUNY Brooklyn College</div>
                                    <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
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

