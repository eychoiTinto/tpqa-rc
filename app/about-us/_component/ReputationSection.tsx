/* eslint-disable @next/next/no-img-element */
const ReputationSection = () => {
    return (
        <div className='px-5 md:px-0'>
            <h1 className='header-text text-center'>평판조회 핵심내용</h1>
            <div className="py-[60px] md:my-[180px] bg-white w-full space-y-10 md:space-y-48">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center container mx-auto">
                    <div className="flex-1 space-y-5 w-full">
                        <h1 className="header-text max-w-96 tracking-[-0.8px] leading-[32px] md:leading-[64px]">
                            특별히 평판조회<br />
                            많이 하는 직무 있다
                        </h1>
                        <div className="hidden md:block content-paragraph w-full">
                            인사담당자 705명을 대상으로한 설문조사에서 66%는 특별히<br className="br-mobile" /> 평판조회를<br className="hidden md:flex" />많이 하는 직무가 있다고 응답하였습니다. 가장 많이 하는 직무 <strong>1위는 재무/회계/<br />경리45%</strong>로 가장 많았습니다.
                            2위는 영업/판매/영업관리로 17%, 3위는 경영<br />기획/인사 15%, 4위는 고객상담/CS/서비스 8% 등 입니다.<br />
                            <strong>특정 직무를  평판조회 하는 이유로 50%가 직무 특성상 개인의 인성이나 성향이<br />중요하기 때문, 40%는 부적합한 사람을 채용할 경우 사고 발생 가능성이나 파장</strong><br />이 큰 직무이기 때문이라는 응답이었습니다.
                        </div>
                        <div>
                            <p className="block md:hidden text-wrap">
                                인사담당자 705명을 대상으로한 설문조사에서 66%는 특별히 평판조회를
                                많이 하는 직무가 있다고 응답하였습니다. 가장 많이 하는 직무 <strong>1위는 재무/회계/경리45%</strong>로 가장 많았습니다. 2위는 영업/판매/영업관리로 17%, 3위는 경영
                                기획/인사 15%, 4위는 고객상담/CS/서비스 8% 등 입니다.
                            </p>
                            <p className="block md:hidden"><strong>특정 직무를  평판조회 하는 이유로 50%가 직무 특성상 개인의 인성이나 성향이 중요하기 때문, 40%는 부적합한 사람을 채용할 경우 사고 발생 가능성이나 파장이 큰 직무</strong>이기 때문이라는 응답이었습니다.</p>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <img src="/assets/pie-chart-02.png" alt="pie chart" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center container mx-auto w-full">
                    <div className="flex-1 space-y-5 w-full">
                        <div className="header-text max-w-[578px] tracking-[-0.8px]  leading-[32px] md:leading-[64px]">
                            <p>기업별로 62%~84%은</p>
                            <p>평판조회 실시</p>
                        </div>
                        <div className="content-paragraph">
                            <p>평판조회를 하는 이유로는 <strong> 1위는 면접 중 지원자를 파악하는 것만으로는</strong></p>
                            <p><strong>부족해서(51.6%),</strong> 2위는 이력서 내용의 진위를 파악하기 위해서(37.8%), </p>
                            <p>3위는 회사의 인재상과 부합하는지 확인하기 위해서 (36.2%) 등 입니다. </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src="/assets/line-chart.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReputationSection;

