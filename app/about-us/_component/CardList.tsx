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

const classNames = {
  textArea: 'space-y-4 md:space-y-5 mt-4 md:mt-5 group',
  heading: 'text-white text-base md:text-2xl font-semibold tracking-[-0.32px] md:tracking-[-0.48px] opacity-0 group-hover:opacity-100',
  description: 'text-white text-sm md:text-lg tracking-[-0.36px]animate-fadeIn opacity-0 group-hover:opacity-100'
}

export default function InteractiveCard({ title, subtitle, heading, description, backgroundImage }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative w-full rounded-[16px] overflow-hidden shadow-lg transition-all duration-300 ease-in-out `}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div onMouseOver={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)} className={`inset-0 bg-black bg-opacity-50 transition-all duration-300 ease-in-out p-[1.6vw] h-full ${isExpanded && 'backdrop-blur-lg'}`}>
        <div className="h-full flex flex-col justify-between">
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="flex gap-2 items-center w-full">
                <p className="card-badge min-w-[73px] md:min-w-[96px] inline-flex items-center justify-center">{title}</p>
                {!isExpanded && <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-[24px] md:text-[28px] font-semibold break-keep">{subtitle}</div>}
                <span className="card-subtitle hidden md:block content-paragraph !text-white">{subtitle}</span>
              </div>
              <div className={classNames.textArea}>
                <p className={classNames.heading}>{heading}</p>
                <p className={classNames.description}>{description}</p>
              </div>
            </div>
            <p className="block text-white/70 text-sm tracking-[-0.36px] animate-fadeIn">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

