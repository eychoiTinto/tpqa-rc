import React from 'react'

const MajorPerfomance = () => {
    const classNames = {
        tableContainer: 'rounded-2xl overflow-x-auto overflow-hidden border border-[#C4C4CC] mt-5',
        table: 'table w-full text-sm md:text-lg text-primary tracking-[-0.28px]'
    }

    return (
        <div>
            <h2 className='card-title'>주요 실적</h2>
            <div className={classNames.tableContainer}>
                <table className={classNames.table}>
                    <thead>
                        <tr>
                            <th className="text-center min-w-[100px] md:min-w-[200px]">구분</th>
                            <th className="text-center font-medium min-w-[880px]">검사항목</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">공영기업</td>
                            <td>
                                한국생산성본부, 한국능률협회, 한국표준협회, 한국인삼공사, 한국무역협회, 국립공원관리공단, 한국언론재단, 광진구시설관리공단, 청주시설관리공단, 인천도시개발공사, 한국산업은행, 수협중앙회, 서울산업통상진흥원, 서울신용보증재단, 농업기반공사, 장애인고용촉진공단, 한국석탄공사, 한국방송광고공사, 예금보험공사, 한국환경자원공사, 한국전력거래소, 한전산업개발, 한국동서발전, 경륜훈련원, 공무원연금관리공단, 중앙인사위원회, 국세공무원연구원, BEXCO, 수원시청, 김해시청, 강릉시청, 청와대 101경비대,
                                경기소방학교 등 70여개
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">인성</td>
                            <td className="border-t border-l py-3 px-4">대우조선, 문화방송(대전, 강릉, 여수 등), KT&G, 교원그룹, 동원그룹, 이수그룹, KCC, KCC건설, 현대건설, 한일건설, 대우자동차판매건설부문, 현대아산, 현대엔지니어링,
                                LG-실트론, LG화학, 삼성에버랜드, 일진그룹, 한진중공업, 한진해운, 녹십자그룹, 한국공항, 우리은행, 국민은행, 기업은행, 푸르덴셜생명, 하이마트, 포스데이타, 이브자리,
                                쌍용자동차, 웅진코웨이, 웅진닷컴, 한국타이어, 넥센타이어, (주)새한, STX조선, STX포스, KT인포텍, 대한토지신탁, 대한주택보증, 대한의사협회, 아시아나CC, 안동병원, 주)
                                보광, 보광훼미리마트, 아세아제지, 대교CNS, 대교어린이TV, 동부제강, 전남도시가스 등 300여개</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MajorPerfomance