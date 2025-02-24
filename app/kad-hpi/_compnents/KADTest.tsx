'use client'
import React from 'react'

const KADTest = () => {
    // const [isExpanded, setIsExpanded] = useState(false)
    const isExpanded = false;

    const classNames = {
        tableContainer: 'rounded-2xl overflow-x-auto overflow-hidden border border-[#C4C4CC] mt-5',
        table: 'table w-full text-sm md:text-lg text-primary tracking-[-0.28px]'
    }

    return (
        <div className=''>
            <div className='container mt-[60px] md:mt-[100px]'>
                <h2 className='title-important !text-sm md:!text-2xl'>
                    KAD 인적성검사란?
                </h2>
                <h1 className='header-text mt-4 md:mt-3'>
                    한국사회적성개발원이 개발한 <br />한국형 인 · 적성 측정도구
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-[40px] pb-14'>
                    <div className='card-no-border'>
                        <h1 className='text-base md:text-2xl text-primary font-bold'>편리한 검사</h1>
                        <p className='card-description leading-[32px]'>
                            한번의 검사로 인성+직무 · 적성검사를<br />
                            종합적으로 테스트
                        </p>
                    </div>
                    <div className='card-no-border'>
                        <h1 className='text-base md:text-2xl text-primary font-bold'>경력 진위 검증</h1>
                        <p className='card-description leading-[32px]'>
                            검사자의 집단 석차가 구현되기<br />
                            때문에 성적 처리가 용이
                        </p>
                    </div>
                    <a href="https://livewp.site/wp/md/juris/practice/corporate-finance/" target="_blank">
                        <div className={`rounded-2xl p-4 md:p-8 space-y-2 text-primary border ${isExpanded && 'border-[#1C4A90]'} hover:border-[#1C4A90] hover:bg-[#1c4a900a] hover:cursor-pointer`}>
                            <h1 className='card-inner-title text-base md:text-2xl text-primary font-bold !text-[#1C4A90] inline-flex gap-2'>검증된 프로그램</h1>
                            <p className='card-description leading-[32px] '>300개 일반 기업 및 70개 공영기업에서<br />채택한 검증된 프로그램</p>
                        </div>
                    </a>
                </div>
                <div className='pb-[120px] md:pb-[160px]'>
                    <h2 className='card-title'>검사 내용</h2>
                    <div className={classNames.tableContainer}>
                        <table className={classNames.table}>
                            <thead>
                                <tr>
                                    <th className="text-center min-w-[100px] md:min-w-[200px]">검사유형</th>
                                    <th className="text-center min-w-[880px] md:min-w-full">검사항목</th>
                                    <th className="min-w-[200px]">항목수</th>
                                    <th className="text-center min-w-[200px]">문항수</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">인성</td>
                                    <td>
                                        성실성, 건강상태, 근면성, 솔직성, 성취성, 책임감, 사회성, 대인관계, 협동성, 능동성, 적극성, 자주성, 자신감, 섭외력, 지도력, 규율성, 신뢰성, 준법성, 신경발달, 순수성, 감정, 정신건강, 행동안정, 정서, 인내력, 침착성, 집중력
                                        </td>
                                    <td className="text-center">대분류- 9개항목<br />소분류-27개항목</td>
                                    <td rowSpan={3}>인성 228문항,<br />직무능력 70문항,<br />총 298문항 (90분)</td>
                                </tr>
                                <tr>
                                    <td className="text-center">직무능력</td>
                                    <td>판단능력, 창조능력, 수리능력, 응용능력, 논리능력, 사고능력, 이해능력, 탐구능력</td>
                                    <td className="text-center">8개 항목</td>
                                </tr>
                                <tr>
                                    <td className="text-center">적응적성</td>
                                    <td>사무(기획, 총무, 회계, 안내), 영업(영업, 마케팅, 홍보, 무역), 기술(전산(IT), 연구개발, 생산관리, 기능직), 전문직(언론, 교육, 법무, 금융)</td>
                                    <td>대분류- 4개항목<br />소분류-16개항목</td>
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