import React, { ReactNode } from 'react';
import InteractiveCard from './CardList';
export const HeroTitlePosition = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col gap-5 items-center text-center justify-center w-full">{children}</div>
);

interface CaseStudy {
    id: number
    title: ReactNode
    content: ReactNode
    backgroundImage: string
}

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: <p><strong>최대 연봉의 24배 손실 채용,</strong><br/> 실패의 비용 절감</p>,
        content: (
            <>
                미국의 리서치 회사 NBRI의 한 조사에서 기업들의 약 65% 가량이 잘못 채용해서
                피해를 겪은 것으로 조사되었습니다. 피해 유형은 동료의 사기 저하(36%), 고객 관계 악영향(18%), 매출액 감소(10%) 등이었습니다. 직간접적인 손실 등의 기회비용을 포함하면 직원은
                연봉의 1.5배 이상, 임원은 최대 24배 가량으로 파악되었습니다.<strong> 평판조회는 이러한 리스크를
                    줄이고, 장기적으로 채용 성공률을 높이는 경제적인 투자입니다</strong>.
            </>
        ),
        backgroundImage: 'card1.jpeg',
    },
    {
        id: 2,
        title: <p><strong>지원자의 화려한 이력 포장,</strong><br/> 팩트체크 필요</p>,
        content: (<>서류전형을 통과하기 위한 노력의 일환으로 지원자는 화려한 이력서를 작성합니다. 미국의 취업 사이트 커리어 빌더닷컴이2006년 1000여명의 채용 담당자를 대상으로 조사한 결과를 보면
            약 57%는 ‘거짓 이력서’를 발견한 경험이 있는 것으로 나타났습니다. 국내 취업 사이트 사람인이2007년 구직자를 대상으로 한 조사에서 학력/경력/특기 등을 과장 또는 허위로 이력서에
            작성한 경험이 있다는 응답이 약 16%였으며, 합격하기 위해 거짓말을 할 의사가 있다는 응답이 약 54%나 되었습니다. <strong>평판 조회는 지원자가 실제로 조직과 업무에 기여했던 방식과 동료 및
                상사와의 관계를 구체적으로 확인할 수 있는 객관적인 방법입니다.</strong></>),
        backgroundImage: 'card2.jpeg',
    },
    {
        id: 3,
        title: <p><strong>면접의 달인 등장,</strong><br/> 실제 역량 검증 필요</p>,
        content: (<>업무에서의 실제 성과, 팀워크, 리더십, 문제 해결 능력 등은 서류와 인터뷰만으로 완전히
            검증하기 어렵습니다. 구직자들의 면접 스킬은 날로 발전하고 있습니다. 서점에는 면접 성공
            비결에 관한 책들이 많이 출판되었고, 다양한 온라인 카페와 블로그에서는 면접 노하우를
            공유하며, 구직자들은 수차례 모의면접을 진행하여 실력을 다지고 있습니다. 이러한 변화에
            발맞춰 구직자들의 면접 준비는 점점 더 세련되고 철저해지고 있습니다. 하지만 문제는
            면접에서 나타나는 화려한 이력과 자신감 넘치는 대답만으로는 지원자가 실제로 업무에
            적합한지, 그리고 과거에 어떻게 행동했는지 파악하기 어렵습니다.<strong> 이러한 문제를 해결하고 보다 신뢰성 있는 채용을 진행하기 위해 평판 조회가 필요합니다.</strong></>),
        backgroundImage: 'card3.jpeg',

    },
    {
        id: 4,
        title: <p><strong>기업 이미지 손실,</strong><br/> 리스크관리의 중요성</p>,
        content: (<>중요한 직책의 경우, 신뢰할 수 없는 사람을 채용하면 기업 이미지와 평판에 직접적인 영향을
            미칠 수 있습니다. 또한, 과거의 문제 행동(예: 윤리적 이슈, 업무 태만 등)이 반복될 가능성을
            미리 차단할 수 있습니다. <strong>평판 조회는 기업이 윤리적이고 책임감 있는 결정을 내리는데
                도움을 주며, 장기적으로 회사의 신뢰도를 높이는 역할을 합니다.</strong></>),
        backgroundImage: 'card4.jpeg',

    },
]
const WorkingPrinciples = () => {
    return (
        <div id="need" className='bg-white py-[120px] md:py-[160px] container mx-auto'>
            <HeroTitlePosition>
                <h3 className='title-important text-center'>평판조회의 필요성</h3>
                <h2 className='header-text text-primary leading-[32px] md:leading-[64px]'>평판조회는 채용 리스크를 줄이고조직의 손실을 방지하는 데 필수적입니다.</h2>
            </HeroTitlePosition>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-[60px]'>
                {
                    caseStudies?.map((caseStudy: CaseStudy) => <InteractiveCard key={caseStudy.id} title={caseStudy.title} description={caseStudy?.content} backgroundImage={caseStudy.backgroundImage} id={String(caseStudy.id)} />)
                }

            </div>

        </div>
    )
}

export default WorkingPrinciples