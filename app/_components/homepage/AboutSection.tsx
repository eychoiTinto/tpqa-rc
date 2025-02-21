import React from 'react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-sm md:text-xl font-bold text-muted-foreground tracking-[-0.28px] md:tracking-[-0.4px]">{children}</h2>
);


const SubText = ({ children }: { children: React.ReactNode }) => (
    <div className="text-gray-500 mt-5">{children}</div>
);

const HighlightText = ({ children }: { children: React.ReactNode }) => (
    <div className="text-xl md:text-3xl lg:text-[40px] font-semibold tracking-[-0.4px] md:tracking-[-0.8px]">{children}</div>
);

export default function AboutSection() {
    return (
        <div id="what" className="bg-primary text-white relative overflow-hidden w-full">
            <div className="pt-[120px] md:py-[200px] space-y-[108px] md:space-y-60 px-5 md:px-0 w-full">
                <div className="flex flex-col justify-between items-start md:grid grid-cols-2 container mx-auto w-full">
                    {/* Left Content */}
                    <div className="space-y-6 w-full ">
                        <SectionTitle>평판조회란?</SectionTitle>
                        <HighlightText>
                            <h1 className='leading-tight tracking-[-0.8px]' style={{ lineHeight: '160%' }}>
                                평판조회란 채용 확정에 앞서<br />
                                후보자의 이력*의 신뢰성을 검증하고,<br />
                                과거 직장에서의 성과와 역량**을 후보자의<br />
                                주변인을 통해 확인하는 절차입니다.
                            </h1>
                            <div className="text-sm md:text-xl text-white/50 mt-3 md:flex gap-6 items-center font-normal">
                                <p>*학력, 경력, 자격증 등</p>
                                <p>**책임감, 팀워크, 대인관계, 조직적합성 등</p>
                            </div>
                        </HighlightText>
                    </div>

                    {/* Right Content - Chat Bubbles */}
                    <div className="flex flex-col gap-6 md:gap-[72px] md:relative right-0 bottom-24 mt-[70px] md:mt-0 justify-between items-center w-full">
                        <ChatBubble position='left' message="단순 면접만으로는 지원자의 진짜 성격과 협업 태도를 알기 어려워요" />
                        <ChatBubble position='right' message="서류만 보면 완벽해 보이는데, 실제로 어떤 사람인지 확신이 안 들어요." />
                        <ChatBubble position='left' message="채용 후 문제가 생길까 걱정돼서 미리 더 확실히 검증하고 싶어요." />
                        <ChatBubble position='right' message="걸으로는 괜찮아 보이지만, 과거 이력이나 평판이 걱정돼요." />
                    </div>
                </div>
                <Wave />
            </div>
        </div>
    );
}

interface ChatBubbleProps {
    message: string
    className?: string
    position?: "left" | "right";
}
function ChatBubble({ message, className = "", position = "left" }: ChatBubbleProps & { position?: "left" | "right" }) {
    return (
        <div className='w-full flex items-center justify-center overflow-x-clip'>
            <div className={`w-full ${position === 'right' && 'ml-[80px]'}`}>
                <div className={`bg-[#3B5369] rounded-2xl md:rounded-full px-5 md:px-10 py-[10px] md:py-6 text-white ${className} relative w-full  max-w-[254px] md:max-w-[610px] font-medium`}>
                    <p className="text-sm md:text-xl tracking-[-0.28px] md:tracking-[-0.4px] text-left md:text-center">{message}</p>
                    <div className={`absolute ${position === 'left' ? '-bottom-3 left-5' : '-bottom-3 right-5'}`}>
                        <svg
                            width="36"
                            height="28"
                            viewBox="0 0 36 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`absolute -top-6 ${position === "left" ? "left-2" : "right-2"} ${position === "right" ? "transform -scale-x-100" : ""}`}
                        >
                            <path
                                d="M25.791 28C16.6567 28 1.25373 9.33333 0 0H36C27.403 1.76101 13.3254 9.82641 25.791 28Z"
                                fill="#3B5369"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}


function Wave() {

    return (
        <div className='relative h-[80vh] md:h-[750px]'>
            <div className="container mx-auto w-full h-full">
                <HighlightText>
                    <p className='hidden md:block tracking-[-0.4px] md:tracking-[-0.8px] leading-[32px] md:leading-[64px]'>
                        해외에서는 경력직 채용 과정에서<br />
                        평판조회가 핵심적인 절차로 자리 잡고 있으며,<br />
                        채용 결정에 중요한 영향을 미치는 활동으로 평가 받고 있습니다.<br />
                        실제로 미국 인사관리협회(SHRM)의 조사에 따르면,<br />
                        90% 이상의 기업이 평판조회를 실시하고 있는 것으로 나타났습니다.
                    </p>
                    <p className='block md:hidden tracking-[-0.4px] leading-[32px] text-xl'>
                        해외에서는 경력직 채용 과정에서<br />
                        평판조회가 핵심적인 절차로 자리 잡고<br />
                        있으며, 채용 결정에 중요한 영향을 미치는<br />
                        활동으로 평가 받고 있습니다.<br />
                        조사에 따르면,  90% 이상의 기업이<br />
                        평판조회를 실시하고 있는 것으로<br />
                        나타났습니다.
                    </p>
                </ HighlightText>
                <SubText>
                    <p style={{ lineHeight: '180%' }} className='tracking-[-0.28px] md:tracking-[-0.4px] text-sm md:text-xl'>국내 주요 취업포털 3사의 조사 결과, <strong className='text-white'>평균 60% 이상의</strong> 기업이<br />평판조회를 사용하고 있으며, <strong className='text-white'>이를 기준 중 95%</strong>는 조회 결과를<br />실제 채용 의사 결정에 적극적으로 반영하고 있는 것으로 조사되었습니다.</p>
                </SubText>

            </div>
            <div className='absolute left-1/3 -translate-x-1/3 top-1/3 md:top-1/2 -translate-y-1/2'>
                <svg
                    width={1920}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1920 1124"
                    fill="none"
                >
                    <path
                        d="M-162.163 1011.24L-331 1180H2068V5C2068 5 1903.91 229.684 1837.5 248.5C1771.09 267.316 1683.5 283 1620.08 339.365C1556.66 395.73 1538.77 525.389 1483.5 535.5C1428.23 545.611 1374 517.5 1307.5 535.5C1241 553.5 1224 598 1182.23 611.391C1158.09 619.133 1069.5 575 990.5 640.5C911.5 706 888.5 687 854.64 721.586C820.781 756.172 808 800.927 775.262 800.927C742.523 800.927 717.5 772 682.5 800.927C647.5 829.854 634.5 882.5 599.495 873.341C564.489 864.183 554.5 830.5 528.5 835.56C502.5 840.62 504 879 464 873.341C424 867.683 422 826.5 385.928 835.56C349.856 844.62 334.5 891 299.62 907.974C214.454 949.419 145.114 876.272 65.2634 955.831C39.5 981.5 6.67438 985.426 -44.9848 986.685C-96.6439 987.945 -88.454 1009.77 -106.724 1011.24C-124.993 1012.71 -162.163 1011.24 -162.163 1011.24Z"
                        fill="url(#paint0_linear_24_99)"
                        fillOpacity="0.2"
                        stroke="url(#paint1_linear_24_99)"
                        strokeWidth={3}
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_24_99"
                            x1="868.5"
                            y1={5}
                            x2="868.5"
                            y2="908.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset={1} stopColor="white" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_24_99"
                            x1="868.5"
                            y1={5}
                            x2="868.5"
                            y2="933.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset={1} stopColor="white" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>

    )
}

