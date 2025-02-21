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

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      onClick={toggleExpand}
      className={`relative w-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out cursor-pointer ${isExpanded ? "backdrop-blur-md" : ""
        }`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`h-full inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isExpanded && 'backdrop-blur-lg'}`}>
        <div className={`h-full flex flex-col justify-between transition-padding duration-300 ease-in-out ${isExpanded ? 'px-[32px] pt-[4px] pb-[60px]' : 'p-[32px]'}`}>
          <div className="">
            <h2 className={`text-muted-foreground text-xs md:text-xl font-bold tracking-[-0.24px] md:tracking-[-0.4px] ${isExpanded ? 'opacity-0' : 'opacity-100'}`}>Case {id}</h2>
            <div className="text-muted-foreground text-base md:text-[28px] leading-[24px] md:leading-[42px]">{title}</div>
            <p className={`text-white text-base mt-[20px] md:text-lg tracking-[-0.32px] md:tracking-[-0.36px] transition-opacity duration-300 leading-[160%] ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>{description}</p>
          </div>
          <button
            className={`absolute bottom-4 md:bottom-8 right-4 md:right-8 h-10 flex items-center justify-center transition-all duration-300 ease-in-out ${isExpanded ? 'opacity-0' : ''}`}
            aria-label={isExpanded ? "Collapse card" : "Expand card"}
          >
            <PlusCircle/>
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
