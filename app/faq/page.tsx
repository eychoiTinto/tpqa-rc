'use client'
import PageHeader from '@/components/PageHeader'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { faqs } from '@/data/FaqData'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import FAQBackground from './_components/AcademicBackground'
import ProgressSteps from './_components/ProgressSteps'

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div>
            <PageHeader alt='faq-page-header' title='FAQ' src='/assets/faq-header.png' />
            <div className='container mt-[60px] md:mt-[100px] px-5 md:px-0'>
                <h1 className='header-text mb-10'>자주하는 질문</h1>
                <div>
                    <div className="w-full space-y-3 md:space-y-4">
                        {faqs.map((faq, index) => (
                            <Collapsible
                                onOpenChange={() => handleToggle(index)}
                                key={index} className="rounded-2xl border border-[#C4C4CC] bg-white hover:bg-[#1c4a900a] transition-all duration-500 hover:cursor-pointer hover:border-[#1C4A90]">
                                <CollapsibleTrigger className="group flex w-full items-start justify-between p-4 md:p-8 text-left">
                                    <span className="card-title !text-base md:!text-2xl !font-semibold">
                                        <span className="mr-2 text-[#1C4A90]">Q</span>
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`h-6 w-6 shrink-0 text-neutral-400 transition-transform duration-300 ease-in-out ${openIndex === index ? '-rotate-180' : ''
                                            }`}
                                    />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-8 pb-6 pt-0 text-[15px] leading-relaxed text-neutral-600 whitespace-pre-line space-y-4 md:space-y-6">
                                    <hr className='border-[#C4C4CC]' />
                                    <div className='content-paragraph'>
                                        {faq.answer}
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>

                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className='bg-[#F7F7F7] mt-[120px] md:mt-[160px]'>
                    <div className='container space-y-16 py-[120px] md:py-[160px] px-5 md:px-0'>
                        <FAQBackground
                            key={'faq1'}
                            cardBackground={false}
                            title={
                                <div>
                                    <p className='header-text'>학력검증</p>
                                    <p className='text-base md:text-[28px]'>Education Verification</p>
                                </div>
                            }
                            description={
                                <div>
                                    <p className='hidden md:block'>학력을 과장하거나 조작하는 학력 위조 사례는 점점 늘어나고 있습니다.<br />
                                        2000년대부터 정·재계 인사, 학계 교수, 연예인 등 유명인의<br />
                                        허위 학력 적발 사례가 빈번하게 발생하며, 이러한 문제의 심각성을<br />
                                        인지한 공기업 및 사기업에서도 채용 과정에서 학력 조회를 의뢰하고 있습니다.</p>
                                    <p className='block md:hidden'>
                                        학력을 과장하거나 조작하는 학력 위조 사례는 점점 늘어나고
                                        있습니다. 2000년대부터 정·재계 인사, 학계 교수, 연예인 등
                                        유명인의 허위 학력 적발 사례가 빈번하게 발생하며, 이러한
                                        문제의 심각성을 인지한 공기업 및 사기업에서도 채용 과정에서 학력 조회를 의뢰하고 있습니다.
                                    </p>
                                </div>
                            }
                            verificationPoints={[
                                '국내 / 해외 학력 검증',
                                '캠퍼스 (본교/분교) 확인',
                                '학・석・박 (수료/졸업) 확인',
                            ]}
                            subSectionTop={
                                <>

                                    학력 조회 결과 위조로 판명되는 비율은 약 10%에 달합니다.<br />
                                    대표적인 사례로는 다음과 같습니다.
                                </>
                            }
                            subSectionBottom={
                                <>
                                    ㈜넥서스앤컴퍼니는 국내외 학력을 해당 학교나 관련 기관을 통해 철저히 검증하며 정확한 결과를 제공합니다.
                                </>
                            }
                            cases={[
                                { buttonText: '사례 1', title: '학위 수료나 중퇴를 졸업으로 허위 기재' },
                                { buttonText: '사례 2', title: '사례 교환학생 경험을 졸업생으로 위장' },
                                { buttonText: '사례 3', title: '학.석.박 (수료/졸업) 확인' },
                            ]}
                        />
                        <ProgressSteps currentStep={progreessData?.currentStep} steps={progreessData.steps} subtitle={progreessData?.subtitle} title={progreessData?.title} backgroundGray={progreessData?.backgroundGray} />
                    </div>

                </div>
                <div className='container space-y-16 py-[120px] md:py-[160px] px-5 md:px-0'>
                    <FAQBackground
                        key={'faq2'}

                        cardBackground={true}
                        title={
                            <>
                                경력검증<br />
                                <p  className='text-base md:text-[28px]'>Employment Verification</p>
                            </>
                        }
                        description={
                            <div>
                                <p className='hidden md:block'>이력서에 기재된 경력 사항의 진위 여부를 검증하는 서비스입니다.<br />
                                    한 조사에 따르면, 국내 주요 140개 기업(4대 그룹 포함)의 경력직<br />
                                    채용 과정에서 채용에 응모한 4,100명 중 약 18.6%(760여 명)가 학력 및<br />
                                    경력을 속인 것으로 밝혀졌습니다.
                                </p>
                                <p className='block md:hidden'>
                                    이력서에 기재된 경력 사항의 진위 여부를 검증하는<br />서비스입니다. 한 조사에 따르면, 국내 주요 140개 기업(4대
                                    그룹 포함)의 경력직  채용 과정에서 채용에 응모한 4,100명 중 약 18.6%(760여 명)가 학력 및 경력을 속인 것으로
                                    밝혀졌습니다.
                                </p>

                            </div>
                        }
                        verificationPoints={[
                            '국내 / 해외 학력 검증',
                            '캠퍼스 (본교/분교) 확인',
                            '학・석・박 (수료/졸업) 확인',
                        ]}
                        subSectionTop={
                            <>
                                경력 위조가 쉬운 만큼, 정확한 검증이 반드시 필요합니다.<br />
                                대표적인 사례로는 다음과 같습니다.
                            </>
                        }
                        subSectionBottom={
                            <>
                                ㈜넥서스앤컴퍼니의 경력 검증 서비스는 허위·과장된 경력 및 사고 이력이 있는 지원자의 입사를 방지하기 위해,<br className='hidden md:block' />
                                경력 사항의 진위 여부와 실근무 기간을 철저히 확인합니다.
                            </>
                        }
                        cases={[
                            { buttonText: '사례 1', title: '학위 수료나 중퇴를 졸업으로 허위 기재' },
                            { buttonText: '사례 2', title: '사례 교환학생 경험을 졸업생으로 위장' },
                            { buttonText: '사례 3', title: '학.석.박 (수료/졸업) 확인' },
                        ]}
                    />
                    <ProgressSteps currentStep={progreessData2?.currentStep} steps={progreessData2.steps} subtitle={progreessData2?.subtitle} title={progreessData2?.title} backgroundGray={progreessData2?.backgroundGray} />
                </div>

            </div>
        </div>
    )
}
export default FAQPage



const progreessData = {
    currentStep: 1,
    backgroundGray: true,
    steps: [
        <span key="step1">학력조회 의뢰</span>,
        <span key="step2">서류 준비 <br />(대상자 동의서)</span>,
        <span key="step3">해당 대학 조회 의뢰</span>,
        <span key="step4">조회 확인</span>,
        <span key="step5">학력보고서 작성 및 제출</span>,
        <span key="step6">수수료 청구 및 납부</span>
    ],
    title: "학력검증 프로세스 (평균 2~3일 소요)",
    subtitle: "*해외 학력조회는 나라별, 학위별 검증 방법이 상이하여 5일 이상 소요될 수 있음"
};

const progreessData2 = {
    currentStep: 1,
    backgroundGray: false,
    steps: [
        <span key="step1">경력검증 의뢰</span>,
        <span key="step2">서류 준비<br /><span className='text-base'>(후보자 동의서 및 제반사항)</span></span>,
        <span key="step3">해당 기업 조회 의뢰</span>,
        <span key="step4">조회 확인</span>,
        <span key="step5">경력보고서 작성<br />및 제출</span>,
        <span key="step6">수수료 청구 및 납부</span>
    ],
    title: "경력검증 프로세스 (평균 5일 이내 소요)",
    subtitle: "*해외경력조회는 경력 조회 가능 여부 확인 후 진행, *조회 기간은 국가별로 상이함"
};
