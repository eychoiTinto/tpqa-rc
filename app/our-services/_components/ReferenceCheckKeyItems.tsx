import React from 'react'

const ReferenceCheckKeyItems = () => {
    return (
        <div className='container'>
            <h1 className='header-text w-full'>평판조회 주요항목</h1>
            <div className='mt-10 md:mt-[42px] w-full'>
                <div className='flex flex-col md:flex-row gap-12 justify-between items-center w-full'>
                    <div className='flex flex-col justify-between gap-10 w-full'>
                        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-6 w-full'>
                            <div className='space-y-[10px] md:space-y-2 flex-1 w-full'>
                                <h1 className='reference-card-h1'>
                                    이력서, 경력기술서, 자기소개서 등<br />
                                    서류에 기재된 성과와 역량 검증</h1>
                                <h1 className='reference-card-p'>함께 일한 동료를 통해 지원자의 실제 성과와<br />
                                    업무에서 보여준 역량을 확인합니다.</h1>
                            </div>
                            <div className='card-no-border basis-2/3 w-full'>
                                <h1 className='card-title'>성과/역량의 진위</h1>
                                <p className='card-description leading-[64px]'>짧은 면접 시간과 서류만으로는 지원자의 숨겨진 성과와 역량을 완전히 파악하기 어렵습니다.<br />
                                    보이지 않고 들리지 않는 이러한 부분을 확인하기 위해, 실무 면접 전후에 평판조회를 진행하는 것을<br />
                                    권장합니다. (주)넥서스앤컴퍼니는 후보자와 함께 일한 동료를 통해 지원자의 실제 성과와 업무에서<br />
                                    보여준 역량을 철저히 확인하며, 신뢰할 수 있는 정보를 제공합니다.</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-3'>
                            <div className='space-y-2'>
                                <h1 className='reference-card-h1'>
                                    서류와 면접에서 드러나지 않는<br />
                                    인성과 인간관계 검증</h1>
                                <h1 className='reference-card-p'>지원자가 실제 조직 생활에서 보여주는<br />
                                    인성과 그로 인한 장단점을 확인합니다.</h1>
                            </div>
                            <div className='card-no-border basis-2/3'>
                                <h1 className='card-title'>인성/인간관계</h1>
                                <p className='card-description'>상사/동료/부하직원과의 인간관계를 확인하여, 입사 후 조직에 미칠 영향을 평가합니다. 이를 통해<br />
                                    지원자가 고객사의 조직문화에 적합한지, 장기적으로 로열티를 갖고 근무할 가능성이 있는지 확인합니다.<br />
                                    특히 리더급 직원을 채용할 경우에는 리더십을 중심으로 평판조회를 진행하며, 특정 직무나 실무자를 채용할<br />
                                    경우에는 팔로우십과 직무를 수행하는 데 필요한 올바른 인성을 갖추었는지 철저히 확인합니다.</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-3'>
                            <div className='space-y-2'>
                                <h1 className='reference-card-h1'>
                                    주변인의 확인을 통해<br />
                                    숨겨진 퇴사/이직 사유를 파악</h1>
                                <h1 className='reference-card-p'>지원자가 서류에 기재하거나 면접에서<br />
                                    언급하지 않은 실제 이직 사유를 확인합니다.</h1>
                            </div>
                            <div className='card-no-border basis-2/3'>
                                <h1 className='card-title'>실제 이직사유</h1>
                                <p className='card-description'>퇴직 이유에 징계 또는 부적절한 행위가 포함되었는지 검토합니다. 이를 통해 지원자의 준법성, 근면성,<br />
                                    인성, 인간관계를 종합적으로 평가할 수 있습니다. 이 과정은 지원자가 조직에 미칠 잠재적 영향을 사전에<br />
                                    검토하고, 고객사의 기준에 적합한 인재를 선별하는 데 핵심적인 역할을 합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReferenceCheckKeyItems