"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ViewMoreButton from "@/components/ui/ViewMoreButton";
import Image from "next/image";
// import RspCarosuel from "./Carosuel";
// import EmblaCarousel from "./Carosuel";
import { EmblaOptionsType } from 'embla-carousel'
interface Story {
  tag: string;
  title: string;
  subtitle: string;
  image: string;
}

const stories: Story[] = [
  {
    tag: "대기업",
    title: "평판조회 의뢰후기",
    subtitle: "국내 대기업 H사 인사팀 과장",
    image: "/assets/carosuel1.png",
  },
  {
    tag: "스타트업",
    title: "평판조회 담당사례",
    subtitle: "IT스타트업 L사 대표",
    image: "/assets/carosuel1.png",
  },
  {
    tag: "중소기업",
    title: "평판조회 사례",
    subtitle: "제조업체 K사 이사",
    image: "/assets/carosuel2.png",
  },
  {
    tag: "대기업",
    title: "평판조회 후기",
    subtitle: "국내 대기업 S사 부장",
    image: "/assets/carosuel3.png",
  },
  {
    tag: "스타트업",
    title: "평판조회 사례",
    subtitle: "IT스타트업 B사 대표",
    image: "/assets/carosuel4.png",
  },
];
// const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 8
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function ClientStories() {
  return (
    <section>
      <div className="py-[150px] bg-[#EFF2F5] px-5 md:px-0">
        <div className="container mb-12">
          <h2
            className="text-[40px] text-primary font-bold mb-2 text-header tracking-[-0.8px]"
            style={{ lineHeight: "64px" }}
          >
            Satisfied Client Stories
          </h2>
          <p className="text-[#202021]">신뢰를 바탕으로 함께 만들어가는 성공 사례들</p>
        </div>

        <div className="relative">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 w-[15%] h-full opacity-50 bg-gradient-to-r from-gray-50 to-transparent z-10" />

          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 w-[15%] h-full opacity-50 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          <Carousel
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              startIndex: 0,
              
            }}
            className="w-full"
          >
            <CarouselContent className="md:ml-2">
              {stories.map((story, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 first:pl-2"
                >
                  <div className="relative h-[408px] overflow-hidden rounded-lg">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white text-lg text-primary font-semibold">
                        {story.tag}
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-normal">{story.title}</h3>
                      <p className="text-[28px] font-semibold tracking-[-0.56px] text-gray-200">
                        {story.subtitle}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:absolute left-[8%] z-20 bg-transparent backdrop-blur-sm size-12 border-none" />
            <CarouselNext className="hidden md:absolute right-[8%] z-20" />
          </Carousel>
        </div>
        {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}

        <ViewMoreButton title={"Find Out More"} />
      </div>
    </section>
  );
}
