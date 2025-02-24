import { callToActionData, callToActionDataMobile } from '@/data/CallToActionData'
import Image from 'next/image'
import React from 'react'

const CallToAction = () => {
    return (
        <div className='bg-primary pb-[120px] md:pb-44 space-y-[60px]'>
            <h1 className='header-text !text-muted-foreground text-center leading-[32px] md:leading-[64px]'>중요한 선택의 순간,<br />
                체계적인 평판조회를 경험해보세요.</h1>
            <div className='container flex flex-col gap-[12px] md:grid grid-cols-1 md:gap-6'>
                {callToActionData?.map((section) => (
                    <div key={section.id} className="relative overflow-hidden rounded-lg">
                        <div className="relative min-h-[320px] w-full border border-white-border overflow-hidden rounded-2xl">
                            <Image src={section.image || "/placeholder.svg"} alt="" fill className="object-cover" priority />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: "linear-gradient(90deg, rgba(10, 40, 68, 0.90) 15%, rgba(10, 40, 68, 0.00) 100%)",
                                }}
                            />
                            <div className="absolute inset-0 flex flex-col justify-center text-white">
                                <div className="md:max-w-3xl md:py-[58px] md:pl-[80px] px-[16px]">
                                    <h2 className="title-paragraph !text-white">{section.title}</h2>
                                    {section.subtitle && (
                                        <h3 className="title-paragraph !text-white">{section.subtitle}</h3>
                                    )}
                                    <p className="text-sm text-gray-200 md:text-xl tracking-[-0.28px] md:tracking-[-0.4px] mt-[12px]">{section.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='hidden container'>
                {callToActionDataMobile?.map((section) => (
                    <div key={section.id} className="mb-3 relative overflow-hidden rounded-lg">
                        <div className="relative min-h-[320px] w-full border border-white-border overflow-hidden rounded-2xl">
                            <Image src={section.image || "/placeholder.svg"} alt="" fill className="object-cover" priority />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: "linear-gradient(180deg, rgba(10, 40, 68, 0.80) 20.61%, rgba(10, 40, 68, 0.00) 140%)",
                                }}                             />
                            <div className="absolute flex flex-col justify-center p-4 text-white">
                                <div className="md:max-w-2xl space-y-3">
                                    <h2 className="!text-base md:title-paragraph !text-white">{section.title}</h2>
                                    {section.subtitle && (
                                        <h3 className="!text-base md:title-paragraph !text-white">{section.subtitle}</h3>
                                    )}
                                    <p className="text-sm text-gray-200 md:text-xl tracking-[-0.28px] md:tracking-[-0.4px]">{section.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CallToAction
