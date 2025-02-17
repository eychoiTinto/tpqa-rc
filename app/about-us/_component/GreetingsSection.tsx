import React from 'react'

const GreetingsSection = () => {
    return (
        <div>
            <div className='space-y-4 mb-10 md:mb-[100px]'>
                <h3 className='title-important'>인사말</h3>
                <div className='max-w-[502px] header-text tracking-[-0.8px] leading-[32px] md:leading-[64px]'>
                    <p>평판조회를 통해 더 나은 채용과</p>
                    <p>성공적인 파트너십을 지원합니다.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-[100px]'>
                <div>
                    <p className='title-paragraph'>We will create the best recruitment culture in Korea.</p>
                    <p className='content-paragraph'>우리는 대한민국의 건전하고 올바른 채용문화를 정착시키기 위해 평판조회 서비스를 시작하게 됐습니다. 평판조회의 목표는 화려한 이력서와 뛰어난 언변으로 부적절한 지원자가 채용되거나, 실제로 우수한 지원자를 놓치는 기회 비용을 최소화하는데 있습니다.</p>
                </div>
                <div>
                    <p className='title-paragraph'>We are committed to doing whatever it takes for our clients.</p>
                    <p className='content-paragraph'>우리의 평판조회 컨설턴트들은 항상 &apos;고객사가 더 나은 인재를 채용할 수 있도록 우리가 무엇을 할 수 있을까?&apos; 를 끊임없이 고민합니다. 고객사의 신뢰에 부응하기 위해, 최선의 결과를 제공할 수 있도록 모든 것을 다하며, 윤리적 책임감을 바탕으로 업무에 임합니다.</p>
                </div>
                <div>
                    <p className='title-paragraph'>Reference check should be conducted in time.</p>
                    <p className='content-paragraph'>평판조회는 채용 과정에서 신속하고 자연스럽게 이루어져야 합니다. 우리 컨설턴트들은 지원자와의 첫 접촉부터 인성과 성격을 면밀히 관찰하고, 의심스러운 부분을 빠짐없이 기록합니다. 전형 단계에 맞춰 세심한 분석을 통해 심도 깊고 정확한 결과를 제공합니다.</p>
                </div>
                <div>
                    <p className='title-paragraph'>We prioritize good people over outstanding people.</p>
                    <p className='content-paragraph'>우리는 뛰어난 능력보다 고객사 문화에 적합하고 성실한 ‘좋은 사람’을 우선합니다. 주변에서 80% 이상이 인정하는 좋은 사람이 고객사의 목표 달성에 기여할 수 있도록, 우리의 시간과 전문성을 아낌없이 투입하겠습니다.</p>
                </div>
            </div>
        </div>
    )
}

export default GreetingsSection