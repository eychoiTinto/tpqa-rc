import { ReactNode } from "react";

export default function ProgressSteps({ currentStep = 1, steps = [], title, subtitle, backgroundGray }: { currentStep: number, title: string, subtitle: string, steps: ReactNode[], backgroundGray: boolean }) {
    return (
        <div className="relative p-5 md:p-10 border border-[#0A69DA] rounded-2xl">
            <div className="mt-16 md:mt-8">
                <div className="relative z-10 flex flex-col md:flex-row justify-between w-full">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center">
                            <div
                                className={`text-sm md:text-xl w-[160px] md:w-[200px] h-[160px] md:h-[200px] rounded-full flex items-center justify-center text-center leading-[22px] md:leading-[28px] tracking-[-0.32px] md:tracking-[0.4px] transition-all ${index + 1 === currentStep
                                    ? "bg-[#1C4A90] text-white"
                                    : "border border-[#1C4A90] bg-white text-[#1C4A90]"
                                    }`}
                            >
                                <span>{step}</span>
                            </div>
                            <div className="hidden md:flex">
                                {index < steps.length - 1 && (index < currentStep ? <ArrowSignBlue /> : <ArrowSignGray />)}
                            </div>
                            <div className="flex md:hidden">
                                {index < steps.length - 1 && (index < currentStep ? <ArrowSignBlueDown /> : <ArrowSignGrayDown />)}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute flex justify-center w-full inset-0 -top-3.5">
                <div className="text-center space-y-[10px]">
                    <p className={`${backgroundGray ? 'bg-[#F7F7F7]' : 'bg-white'} px-4 text-base md:text-xl text-[#1C4A90] font-bold`}>
                        {title}
                    </p>
                    <p className={` w-full ${backgroundGray ? 'bg-[#F7F7F7]' : 'bg-white'} px-4 absolute text-sm md:text-xl text-[#1C4A90] font-normal tracking-[0.32px] left-1/2 -translate-x-1/2`}>
                        {subtitle}
                    </p>
                </div>

            </div>
        </div>
    );
}

const ArrowSignBlue = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="200" viewBox="0 0 32 200" fill="none">
        <path d="M24 100.5L8 65L17 100.5L8 136L24 100.5Z" fill="#0A69DA" />
    </svg>
);

const ArrowSignGray = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="200" viewBox="0 0 32 200" fill="none">
        <path opacity="0.2" d="M24 100.5L8 65L17 100.5L8 136L24 100.5Z" fill="#0A69DA" />
    </svg>
);

const ArrowSignGrayDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="104" height="32" viewBox="0 0 104 32" fill="none">
        <path opacity="0.2" d="M52.5 24.5L88 8.5L52.5 17.5L17 8.5L52.5 24.5Z" fill="#0A69DA" />
    </svg>
)
const ArrowSignBlueDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="104" height="32" viewBox="0 0 104 32" fill="none">
        <path d="M52.5 24.5L88 8.5L52.5 17.5L17 8.5L52.5 24.5Z" fill="#0A69DA" />
    </svg>
)