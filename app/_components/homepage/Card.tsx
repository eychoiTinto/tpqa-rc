/* eslint-disable @next/next/no-img-element */

import { ChevronLeft, ChevronRight } from "lucide-react"

interface CardProps {
    title: string
    subtitle: string
    badge: string
    onPrevClick: () => void
    onNextClick: () => void
}

export default function Card({ title, subtitle, badge, onPrevClick, onNextClick }: CardProps) {
    return (
        <div className="relative h-[400px] rounded-lg overflow-hidden group">
            <img src={`/placeholder.svg?height=400&width=300`} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute top-3 left-3 bg-white text-black text-xs font-bold px-2 py-1 rounded">{badge}</div>
            <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-sm text-gray-300">{subtitle}</p>
            </div>
            <button
                onClick={onPrevClick}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={onNextClick}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    )
}

