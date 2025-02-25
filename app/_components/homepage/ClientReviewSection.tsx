"use client";

import ViewMoreButton from "@/components/ui/ViewMoreButton";
import EmblaCarousel from "./Carosuel";
import CarouselV2 from "./CarouselV2";

export default function ClientStories() {
  return (
    <section className="w-full max-w-full">
      <div className="py-[120px] md:py-[150px] bg-[#EFF2F5]">
        <div className="container mb-12">
          <h2
            className="text-xl md:text-[40px] text-primary font-bold mb-2 text-header tracking-[-0.8px] leading-[32px] md:leading-[64px]"
          >
            Satisfied Client Stories
          </h2>
          <p className="text-sm md:text-xl text-[#202021]">신뢰를 바탕으로 함께 만들어가는 성공 사례들</p>
        </div>
        <div className="hidden md:block mb-[60px]">
          <CarouselV2 />
        </div>
        <div className="block md:hidden mb-10">
          <EmblaCarousel />
        </div>
        <ViewMoreButton title={"Find Out More"} link='/about-us/#aboutCase'/>
      </div>
    </section>
  );
}

// const OPTIONS = { loop: true }
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())