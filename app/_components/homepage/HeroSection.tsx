import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Hero() {
    return (
        <div className="h-full md:h-[1241px] flex items-center justify-center overflow-hidden bg-primary top-0 p-5 md:p-0">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 hero-bg"
            />
            <div
                className="h-screen md:h-[300px] w-full absolute -bottom-14"
                style={{
                    background: "linear-gradient(180deg, rgba(10, 40, 68, 0.00) 0%, #0A2844 82.92%)"
                }}
            ></div>
            {/* Hero Content */}
            <div className="relative z-10 container mx-auto h-full pt-[100px] md:pt-[277px]">
                <div className="w-full md:max-w-3xl">
                    <h1 className="hidden md:block hero-title">
                        ReferCheck makes <br /> a Better Decision for you.
                    </h1>
                    <h1 className="block md:hidden hero-title">
                        ReferCheck<br />makes  a Better <br />Decision for you.
                    </h1>

                    <p className="hero-subtitle">
                        more precisely, more predictably, more fairly
                    </p>

                    <a href="#contact" className="flex justify-center md:justify-start">
                        <Button
                            variant="secondary"
                            className="bg-white text-[#1C4A90] hover:bg-muted-foreground rounded-full px-5 md:px-8 py-[10px] md:py-6 md:text-xl"
                        >
                            평판조회 샘플요청
                        </Button>
                    </a>
                </div>

                {/* Cards Section */}
                <div className="md:absolute z-10 w-full pt-[96px] md:pt-[258px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "평판조회란?",
                                subtitle: "What is a Reference Check?",
                                scrollTo: "#what"
                            },
                            {
                                title: "평판조회의 필요성",
                                subtitle: "Need for Reference Check",
                                scrollTo: "#need"
                            },
                            {
                                title: "레퍼첵의 경쟁력",
                                subtitle: "The competitiveness of the ReferCheck",
                                scrollTo: "#competitiveness"
                            },
                        ].map((card, index) => (
                            <div key={index} className="hero-card">
                                <h3 className="hero-card-title">{card.title}</h3>
                                <p className="hero-card-subtitle">{card.subtitle}</p>

                                <hr className="hero-divider" />

                                <a href={card.scrollTo} className="flex items-center gap-2 justify-end text-sm md:text-xl font-normal">
                                    Find Out More
                                    <ChevronRight className="size-4 md:size-6"/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
