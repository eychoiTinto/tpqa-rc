'use client'
// import { Badge } from '@/components/ui/badge';
// import Image from 'next/image';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { caseStudies } from '@/data/RefCheckData';
import { CaseStudy } from '@/interface/RefCheckDataTypes';
import InteractiveCard from '@/app/about-us/_component/CardList';
import 'react-multi-carousel/lib/styles.css';

// Props টাইপ ডিফাইন করা
interface ButtonGroupProps {
    next: () => void;
    previous: () => void;
    goToSlide?: (index: number) => void;
    setPrev: (value: boolean) => void;
    carouselState?: { currentSlide: number };
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous, setPrev }) => {
    return (
        <div className='carousel-button-group mb-4 gap-4 flex justify-between items-center w-full absolute container left-1/2 -translate-x-1/2 h-0'>
            <svg
                className='hover:cursor-pointer'
                onClick={() => {
                    setPrev(false);
                    previous();
                }}
                xmlns="http://www.w3.org/2000/svg"
                width={60}
                height={60}
                viewBox="0 0 60 60"
                fill="none"
            >
                <rect width={60} height={60} rx={30} fill="white" fillOpacity="0.3" />
                <path
                    d="M26.5254 30L33.8754 22.65C34.1254 22.4 34.2462 22.1042 34.2379 21.7625C34.2295 21.4208 34.1004 21.125 33.8504 20.875C33.6004 20.625 33.3045 20.5 32.9629 20.5C32.6212 20.5 32.3254 20.625 32.0754 20.875L24.4004 28.575C24.2004 28.775 24.0504 29 23.9504 29.25C23.8504 29.5 23.8004 29.75 23.8004 30C23.8004 30.25 23.8504 30.5 23.9504 30.75C24.0504 31 24.2004 31.225 24.4004 31.425L32.1004 39.125C32.3504 39.375 32.642 39.4958 32.9754 39.4875C33.3087 39.4792 33.6004 39.35 33.8504 39.1C34.1004 38.85 34.2254 38.5542 34.2254 38.2125C34.2254 37.8708 34.1004 37.575 33.8504 37.325L26.5254 30Z"
                    fill="white"
                />
            </svg>
            <svg
                className='hover:cursor-pointer'
                onClick={() => {
                    setPrev(true);
                    next();
                }}
                xmlns="http://www.w3.org/2000/svg"
                width={60}
                height={60}
                viewBox="0 0 60 60"
                fill="none"
            >
                <rect width={60} height={60} rx={30} fill="white" fillOpacity="0.3" />
                <path
                    d="M33.4746 30L26.1246 22.65C25.8746 22.4 25.7538 22.1042 25.7621 21.7625C25.7705 21.4208 25.8996 21.125 26.1496 20.875C26.3996 20.625 26.6955 20.5 27.0371 20.5C27.3788 20.5 27.6746 20.625 27.9246 20.875L35.5996 28.575C35.7996 28.775 35.9496 29 36.0496 29.25C36.1496 29.5 36.1996 29.75 36.1996 30C36.1996 30.25 36.1496 30.5 36.0496 30.75C35.9496 31 35.7996 31.225 35.5996 31.425L27.8996 39.125C27.6496 39.375 27.358 39.4958 27.0246 39.4875C26.6913 39.4792 26.3996 39.35 26.1496 39.1C25.8996 38.85 25.7746 38.5542 25.7746 38.2125C25.7746 37.8708 25.8996 37.575 26.1496 37.325L33.4746 30Z"
                    fill="white"
                />
            </svg>
        </div>
    );
};

const CarouselV2: React.FC = () => {
    const [prev, setPrev] = useState(false);
    console.log(prev);

    return (
        <div className='w-full max-w-full'>
            <Carousel
                additionalTransfrom={0}
                customButtonGroup={<ButtonGroup setPrev={setPrev} next={() => { }} previous={() => { }} />}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode
                className="w-full overflow-hidden"
                draggable
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                shouldResetAutoplay
                showDots={false}
                slidesToSlide={1}
                swipeable
                responsive={{
                    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
                    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, partialVisibilityGutter: 30 },
                    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, partialVisibilityGutter: 10 }
                }}
            >
                {caseStudies?.map((caseStudy: CaseStudy) => {
                    return (
                        <div key={caseStudy.id} className="px-3 basis-full sm:basis-1/2 md:basis-1/3 w-full h-full">
                            <InteractiveCard
                                heading={caseStudy.heading}
                                description={caseStudy.description}
                                subtitle={caseStudy.subtitle}
                                key={caseStudy.id}
                                title={caseStudy.title}
                                backgroundImage={caseStudy.backgroundImage}
                                id={String(caseStudy.id)} />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default CarouselV2;


// interface Story {
//     id: number;
//     tag: string;
//     title: string;
//     subtitle: string;
//     image: string;
// }

// const stories: Story[] = [
//     { id: 4, tag: "검증사레", title: "국내 유통 대기업", subtitle: "인사운영팀 과장", image: "/assets/carosuel2.png" },
//     { id: 5, tag: "의뢰후기", title: "국내 반도체 대기업", subtitle: "인사팀 수석", image: "/assets/carosuel4.png" },
//     { id: 6, tag: "검증사례", title: "바이오벤처 J사", subtitle: "인사팀 팀장", image: "/assets/carosuel3.png" },
//     { id: 7, tag: "검증사례", title: "국내 금융사", subtitle: "인사팀 차장", image: "/assets/about-carosuel5.png" },
//     { id: 8, tag: "의뢰후기", title: "IT스타트업 L사", subtitle: "대표", image: "/assets/carosuel1.png" }
// ];


