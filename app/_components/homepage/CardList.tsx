"use client";

import { ReactNode, useState } from "react";

interface CardProps {
  id: string;
  title: ReactNode;
  description: ReactNode;
  backgroundImage: string;
}

export default function InteractiveCard({ title, id, description, backgroundImage }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative w-full ${isExpanded ? 'h-[500px]' : 'h-[200px]'} md:h-[408px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out ${isExpanded ? "backdrop-blur-md" : ""
        }`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isExpanded && 'backdrop-blur-lg'}`}>
        <div className="h-full p-4 md:p-8 flex flex-col justify-between">
          <div className="space-y-2 md:space-y-[13px]">
            <h2 className="text-muted-foreground text-xs md:text-xl font-bold tracking-[-0.24px] md:tracking-[-0.4px]">{!isExpanded && `Case ${id}`}</h2>
            <div className="text-muted-foreground text-base md:text-[28px]  leading-[24px] md:leading-[42px]">{title}</div>
            {isExpanded && <p className="text-white text-base md:text-lg tracking-[-0.32px] md:tracking-[-0.36px] opacity-0 animate-fadeIn " style={{ lineHeight: '160%' }}>{description}</p>}
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute bottom-4 md:bottom-8 right-4 md:right-8 h-10 flex items-center justify-center transition-all duration-300 ease-in-out"
            aria-label={isExpanded ? "Collapse card" : "Expand card"}
          >
            {isExpanded ? "" : <PlusCircle />}
          </button>
        </div>
      </div>
    </div>
  );
}

const PlusCircle = () => {
  return (
    <div>
      <div className="hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" />
          <rect x="16" y="29" width="28" height="2" fill="white" />
          <rect x="29" y="44" width="28" height="2" transform="rotate(-90 29 44)" fill="white" />
        </svg>
      </div>
      <div className="block md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="white" />
          <rect x="9" y="15.5" width="14" height="1" fill="white" />
          <rect x="15.5" y="23" width="14" height="1" transform="rotate(-90 15.5 23)" fill="white" />
        </svg>
      </div>
    </div>
  );
};
