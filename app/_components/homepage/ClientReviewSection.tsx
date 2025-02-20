"use client";

import ViewMoreButton from "@/components/ui/ViewMoreButton";
import CarouselV2 from "./CarouselV2";

export default function ClientStories() {
  return (
    <section className="w-full max-w-full">
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
        <div className="hidden md:block">
          <CarouselV2 />
        </div>
        <ViewMoreButton title={"Find Out More"} />
      </div>
    </section>
  );
}

// const OPTIONS = { loop: true }
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())