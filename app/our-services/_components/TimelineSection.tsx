import { timelineData } from '@/data/TimelineData'
import React from 'react'

const TimelineSection = () => {
    return (
        <div className='bg-primary py-[120px] md:py-40 px-5 md:px-0'>
            <h1 className='header-text text-center !text-muted-foreground'>체계적인 프로세스로<br />
                더 확실한 평판조회</h1>

            <div className='container flex w-full justify-center mt-16'>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[103px] md:left-[140px] top-[24px] w-[2px] h-[calc(100%-125px)] bg-[#6C7E8F]" />

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {timelineData.map((step, index) => (
                            <div key={index} className="flex gap-8 relative">
                                {/* Title */}
                                <div className="min-w-[78px] md:w-[120px] text-right font-medium text-white text-sm md:text-2xl">{step.title}</div>

                                {/* Dot */}

                                <div className='relative -left-5 md:-left-[25px] z-10'>
                                    {
                                        step?.isDot ? <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <rect width="28" height="28" rx="14" fill="#6C7E8F" />
                                            <circle cx="14" cy="14" r="5" fill="#0A2844" />
                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <rect width="28" height="28" rx="14" fill="#6C7E8F" />
                                            <circle cx="14" cy="14" r="12" fill="#0A2844" />
                                        </svg>
                                    }
                                </div>

                                {/* Content */}
                                <div className='space-y-4'>
                                    <div className="flex-1 text-muted-foreground text-sm md:text-xl leading-7 whitespace-pre-line">{step.subtitle}</div>
                                    <div className="flex-1 text-[#8BA1B7] text-xs md:text-base leading-7 whitespace-pre-line">{step.content}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimelineSection