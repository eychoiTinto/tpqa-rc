"use client";

import { ReactNode, useState } from "react";

interface CardProps {
  id: string;
  title: string;
  subtitle: string;
  heading: ReactNode;
  backgroundImage: string;
  description: ReactNode
}

export default function InteractiveCard({ title, subtitle, heading, description, backgroundImage }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative w-full h-[420px] md:h-[408px] p-8 rounded-[16px] overflow-hidden shadow-lg transition-all duration-300 ease-in-out `}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div onMouseOver={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)} className={`absolute inset-0 bg-black bg-opacity-50 transition-all duration-300 ease-in-out  ${isExpanded && 'backdrop-blur-lg'}`}>
        <div className="h-full p-6 flex flex-col justify-between">
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="flex gap-2 items-center w-full">
                <p className="card-badge min-w-[73px] md:min-w-[96px] inline-flex items-center justify-center">{title}</p>
                {isExpanded && <span className="hidden md:block content-paragraph !text-white">{subtitle}</span>}
                {isExpanded && <span onClick={() => setIsExpanded(false)} className="flex justify-end items-center md:hidden content-paragraph !text-white ml-4"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M7.69985 21.0769L6.92285 20.2999L13.2229 13.9999L6.92285 7.69985L7.69985 6.92285L13.9999 13.2229L20.2999 6.92285L21.0769 7.69985L14.7769 13.9999L21.0769 20.2999L20.2999 21.0769L13.9999 14.7769L7.69985 21.0769Z" fill="white" />
                </svg></span>}
                {!isExpanded && <span onClick={() => setIsExpanded(false)} className="flex justify-end items-center md:hidden content-paragraph !text-white ml-4"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M12.9 14.1H6V12.9H12.9V6H14.1V12.9H21V14.1H14.1V21H12.9V14.1Z" fill="white" />
                </svg></span>}
              </div>
              <div className="space-y-4 md:space-y-5 mt-4 md:mt-5 ">
                {isExpanded && <p className="text-white text-base md:text-2xl font-semibold tracking-[-0.32px] md:tracking-[-0.48px]">{heading}</p>}
                {isExpanded && <p className="text-white text-sm md:text-lg tracking-[-0.36px] opacity-0 animate-fadeIn">{description}</p>}
              </div>
            </div>
            {isExpanded && <p className="block md:hidden text-white/70 text-sm tracking-[-0.36px] opacity-0 animate-fadeIn">{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

