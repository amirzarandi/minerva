import React from 'react';
import InnovationCard from './innovationCard';
import Notes from '../../../public/notes.png';
import Deafness from '../../../public/deafness.png';
import Jumping from '../../../public/jumping.jpg';

const WhatWeDo = () => {
    const innovationData = [
        {
            img: "https://img.freepik.com/free-vector/couple-deaf-people-talking-with-hand-gestures-huge-ear-mute-sign-background-vector-illustration-hearing-loss-communication-sign-language-concept_74855-13041.jpg",
            title: 'Hearing Loss Oriented',
            description:
                'Allows users who suffer from hearing loss to be able to retroactively transcribe their lectures or meetings.',
        },
        {
            img: "https://img.freepik.com/free-vector/hands-student-doing-test-writing-planner-person-writing-notebook-with-pen-highlighting-information-flat-vector-illustration-education-planning-concept-banner-landing-web-page_74855-24830.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697673600&semt=ais",
            title: 'Powerful Note Taking',
            description:
                'This platform allows the user to utilize the transcription to create beautiful legible notes.',
        },
        {
            img: "https://img.freepik.com/premium-vector/people-rejoice-victory-working-team-people-celebrate-vector-illustration_3482-8534.jpg",
            title: 'Community Building',
            description:
                'This platform will help in building a community of students who can (idk placeholder)',
        },
    ];
    return (
        <div className="">
            <h1 className="flex justify-center py-5 sm:py-10 font-extralight sm:font-light text-xl sm:text-4xl">
                The Innovation Behind Minerva
            </h1>
            <div className="sm:flex justify-evenly items-center">
                {innovationData.map((data) => (
                    <div className="py-5 px-4 sm:py-0 sm:px-6" key={data.title}>  {/* Adjusted here */}
                        <InnovationCard
                            imgUrl={data.img}
                            title={data.title}
                            description={data.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

};

export default WhatWeDo;
