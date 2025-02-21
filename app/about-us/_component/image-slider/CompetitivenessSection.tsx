
const CompetitivenessSection = () => {
    return (
        <div className='flex flex-col md:flex-row gap-10 md:gap-12 justify-between mt-[120px] md:mt-0'>
            <div>
                <h1 className='max-w-96 w-full header-text leading-[32px] md:leading-[64px]'>
                    신뢰를 더하는 평판조회<br />
                    우리의 차별화된 경쟁력</h1>
            </div>
            <div className='basis-2/3 space-y-[12px] md:space-y-6'>
                <div className='card'>
                    <h1 className='card-title'>방대한 DB 및 인적 네트워크 활용</h1>
                    <p className='card-description '>방대한 DB와 오랫동안<br className="br-mobile" /> 축적한 인적 네트워크를 활용한 평판조회 서비스</p>
                </div>
                <div className='card'>
                    <h1 className='card-title'>대기업 그룹사 및 외국계 기업의 풍부한 경험 보유</h1>
                    <p className='card-description'>100대 대기업, 대형 ICT기업 및<br className="br-mobile" /> 유수 외국계 기업에 대한 평판조회 경험 보유</p>
                </div>
                <div className='card'>
                    <h1 className='card-title'>고품격 평판조회 서비스 제공</h1>
                    <p className='card-description'>평균 7년 이상의 평판조회 경력 컨설턴트가<br className="br-mobile" /> 차별화된 서비스 및 보고서 제공</p>
                </div>
                <div className='card'>
                    <h1 className='card-title'>헤드헌터 출신의 전문가에 의한 평판조회 수행</h1>
                    <p className='card-description'>헤드헌터 경력의 컨설턴트가 평판조회를<br className="br-mobile" /> 수행 하기에 전문화된 업무수행 가능</p>
                </div>
                <div className='card'>
                    <h1 className='card-title'>금융/ICT/제약바이오/소비재/제조/서비스 등의 전문분야 강점</h1>
                    <p className='card-description'>금융, 제약바이오 및 ICT 등의 분야에<br className="br-mobile" /> 많은 경험과 전문성 보유</p>
                </div>
            </div>
        </div>
    )
}

export default CompetitivenessSection