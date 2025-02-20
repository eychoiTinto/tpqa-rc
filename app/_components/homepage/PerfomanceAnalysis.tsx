/* eslint-disable @next/next/no-img-element */
const PerfomanceAnalysis = () => {
    return (
        <div id="competitiveness" className="mb-[120px] md:py-[180px] bg-white space-y-[120px] md:space-y-48 px-5 md:px-0 w-full">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center container mx-auto">
                <div className="flex-1 space-y-3 md:space-y-5">
                    <h3 className="title-important ">평판조회 실적</h3>
                    <h1 className="header-text w-full md:max-w-96 tracking-[-0.4px] md:tracking-[-0.8px] leading-[32px] md:leading-[64px]">
                        (주)레퍼첵의 평판조회 <br /> 매년 20% 이상 증가추세
                    </h1>
                    <p className='hidden md:block content-paragraph'>
                        레퍼첵의 평판조회는 매년 20% 이상 성장하고 있습니다.<br />
                        최근 5개년 과차장급의 평판조회 의뢰가 급격하게 상승하고 있습니다.<br />
                        이는 기업이 리더급의 검증에 더 심혈을 기울이고 있으며,<br />
                        기존의 면접만으로 지원자 검증이 부족하다는 것을 보여주는 것입니다.
                    </p>
                    <p className='block md:hidden content-paragraph'>
                        레퍼첵의 평판조회는 매년 20% 이상 성장하고 있습니다.<br />
                        최근 5개년 과차장급의 평판조회 의뢰가 급격하게 상승하고<br />
                        있습니다. 이는 기업이 리더급의 검증에 더 심혈을 기울이고<br />
                        있으며, 기존의 면접만으로 지원자 검증이 부족하다는 것을<br />
                        보여주는 것입니다.
                    </p> 
                </div>
                <div className="flex-1 w-full">
                    <img src='/assets/barchart.png' alt="perfomance analysis barchart" className='w-full' />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center container mx-auto w-full">
                <div className="md:flex-1 space-y-5">
                    <div className="header-text w-full md:max-w-[578px] tracking-[-0.4px] md:tracking-[-0.8px] leading-[32px] md:leading-[64px]"> 
                        <p>
                            평판조회를 실시하는 기업은 주로<br />
                            과장급, 차부장급, 대리급, 임원급,<br />
                            사원급의 순이었으며, 약 29%는<br />
                            모든 직급에서 조회한다고 밝혔습니다.
                        </p>
                    </div>
                    <div className="content-paragraph">
                        <p>(복수응답, 기업 76%, 평판조회 필요하다 | 출처 : 사람인 설문조사)</p>
                    </div>
                </div>
                <div className="md:flex-1 w-full">
                    <img src="/assets/pie-chart.png" className='w-full' alt="perfomance analysis piechart" />
                </div>
            </div>
        </div>
    );
};

export default PerfomanceAnalysis;
