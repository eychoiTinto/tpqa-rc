'use client'
import React from 'react'

const KADTest = () => {
    return (
        <div className='px-5 md:px-0'>
            <div className='container space-y-4 md:space-y-3 mt-[60px] md:mt-[100px]'>
                <h2 className='text-sm md:text-2xl font-bold !text-[#1C4A90]'>KAD 인적성검사란?</h2>
                <h1 className='hidden md:block header-text leading-[32px] md:leading-[64px]'>한국사회적성개발원이 개발한 <br />
                    한국형 인 · 적성 측정도구</h1>
                <h1 className='block md:hidden header-text leading-[32px] md:leading-[64px]'>국내, 해외 어느 지역이든,<br />
                    (주)넥서스앤컴퍼니는 가능합니다.</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 pb-14'>
                    <div className='card-no-border'>
                        <h1 className='text-base md:text-2xl text-primary font-bold'>편리한 검사</h1>
                        <p className='card-description leading-[32px]'>한번의 검사로 인성+직무 · 적성검사를
                            <br />
                            종합적으로 테스트
                        </p>
                    </div>
                    <div className='card-no-border'>
                        <h1 className='text-base md:text-2xl text-primary font-bold'>경력 진위 검증</h1>
                        <p className='card-description leading-[32px]'>검사자의 집단 석차가 구현되기<br/>
                            때문에 성적 처리가 용이</p>
                    </div>
                    <a href="https://livewp.site/wp/md/juris/practice/corporate-finance/" target="_blank">
                        <div className={`rounded-2xl p-4 md:p-8 space-y-2 text-primary border hover:border-[#1C4A90] hover:bg-[#1c4a900a] hover:cursor-pointer`}>
                            <h1 className='text-base md:text-2xl text-primary font-bold !text-[#1C4A90] inline-flex gap-2'>검증된 프로그램 <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <mask
                                    id="mask0_24_1219"
                                    style={{ maskType: "alpha" }}
                                    maskUnits="userSpaceOnUse"
                                    x={0}
                                    y={0}
                                    width={24}
                                    height={24}
                                >
                                    <rect width={24} height={24} fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_24_1219)">
                                    <path
                                        d="M16.1443 7.80375L6.8115 17.127C6.673 17.2653 6.499 17.3329 6.2895 17.3298C6.07984 17.3266 5.90575 17.2558 5.76725 17.1173C5.62892 16.9788 5.55975 16.8063 5.55975 16.6C5.55975 16.3937 5.62892 16.2213 5.76725 16.0828L15.0905 6.75H6.89425C6.68175 6.75 6.50359 6.67808 6.35975 6.53425C6.21609 6.39042 6.14425 6.21225 6.14425 5.99975C6.14425 5.78708 6.21609 5.609 6.35975 5.4655C6.50359 5.32183 6.68175 5.25 6.89425 5.25H16.7403C16.9964 5.25 17.2111 5.33658 17.3843 5.50975C17.5576 5.68308 17.6443 5.89775 17.6443 6.15375V16C17.6443 16.2125 17.5723 16.3906 17.4285 16.5343C17.2847 16.6781 17.1065 16.75 16.894 16.75C16.6813 16.75 16.5032 16.6781 16.3595 16.5343C16.216 16.3906 16.1443 16.2125 16.1443 16V7.80375Z"
                                        fill="#1C4A90"
                                    />
                                </g>
                            </svg>
                            </h1>
                            <p className='card-description leading-[32px] '>300개 일반 기업 및 70개 공영기업에서<br/>
                                채택한 검증된 프로그램</p>
                        </div>
                    </a>
                </div>
                <div className='pb-[120px] md:pb-[160px]'>
                    <h2 className='card-title'>검사 내용</h2>
                    <div className="rounded-2xl overflow-x-auto overflow-hidden border-[0.1px] mt-5">
                        <table className="w-full text-sm md:text-lg text-primary tracking-[-0.28px]">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="border py-3 px-4 text-center font-medium min-w-[100px] md:min-w-[200px]">검사유형</th>
                                    <th className="border py-3 px-4 text-center font-medium min-w-[880px] md:min-w-full">검사항목</th>
                                    <th className="border py-3 px-4 font-medium min-w-[200px]">항목수</th>
                                    <th className="border py-3 px-4 text-center font-medium min-w-[200px]">문항수</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border py-3 px-4 text-center">인성</td>
                                    <td className="border py-3 px-4">
                                        <div>성실성, 건강상태, 근면성, 솔직성, 성취성, 책임감, 사회성, 대인관계, 협동성, 능동성, 적극성, 자주성, 자신감, 섭외력,
                                            지도력, 규율성, 신뢰성, 준법성, 신경발달, 순수성, 감정, 정신건강, 행동안정, 정서, 인내력, 침착성, 집중력</div>
                                    </td>
                                    <td className="border py-3 px-4">
                                        <div><p className='text-center'>대분류- 9개항목<br />소분류-27개항목</p></div>
                                    </td>
                                    <td rowSpan={3} className="border py-3 px-4">
                                        <div>
                                            <p>인성 228문항,<br />직무능력 70문항,<br />총 298문항 (90분)</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border py-3 px-4 text-center">직무능력</td>
                                    <td className="border py-3 px-4">판단능력, 창조능력, 수리능력, 응용능력, 논리능력, 사고능력, 이해능력, 탐구능력</td>
                                    <td className="border py-3 px-4 text-center">8개 항목</td>
                                </tr>
                                <tr>
                                    <td className="border py-3 px-4 text-center">적응적성</td>
                                    <td className="border py-3 px-4">사무(기획, 총무, 회계, 안내), 영업(영업, 마케팅, 홍보, 무역), 기술(전산(IT), 연구개발, 생산관리, 기능직), 전문직(언론, 교육, 법무, 금융)</td>
                                    <td>
                                        <p className='text-center'>대분류- 4개항목<br />소분류-16개항목</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KADTest