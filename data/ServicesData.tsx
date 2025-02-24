import { ServicesDataTypes } from "@/interface/ServicesDataTypes";

// Define reusable Tailwind classes
const listStyles = "pt-4 pb-6 ml-4 list-disc list-outside tracking-[-0.4px] leading-9 space-y-1 md:space-y-3";
const ulStyles = "list-disc list-outside mt-4 ml-4 pl-4 tracking-[-0.4px] leading-9 space-y-1 md:space-y-3";
const olStyles = "font-semibold list-decimal list-inside space-y-1 md:space-y-3";

export const servicesData: ServicesDataTypes[] = [
    {
        "badge": "모든 지원자",
        "title": "학력 진위 검증",
        "subtitle": "1차 면접 전/후",
        "description": <><p><strong>이력서에 기재된 학력의 진위 여부</strong></p></>,
        "status": "닫기"
    },
    {
        "badge": "모든 지원자",
        "title": "경력 진위 검증",
        "subtitle": "1차 면접 전/후",
        "description": <>
            <p><strong>이력서에 기재된 경력의 진위 여부</strong></p>
            <ul className={ulStyles}><li>전 직장 근무기간, 직위,<br className="hidden md:block" />프로젝트 수행 이력 등</li></ul>
        </>,
        "status": "닫기"
    },
    {
        "badge": "특정 직무/직급",
        "title": "평판조회(약식)",
        "subtitle": "1차 면접 전/후",
        "description": <><p><strong>서류에 작성된 내용의 허위/과장/누락 여부</strong></p>
            <ul className={ulStyles}>
                <li>전 직장 근무기간, 직위, 프로젝트 수행 이력 등</li>
                <li>전 직장 업무 성과 및 그 과정에서의 개인적 공헌 포인트</li>
                <li>지원한 직무를 수행하는데 필요한 능력(역량, 스킬) 수준</li>
            </ul>
        </>,
        "status": "닫기"
    },
    {
        "badge": "모든 지원자",
        "title": "평판조회",
        "subtitle": "2차 면접 전/후",
        "description": <>
            <ol className={olStyles}>
                <li>평판조회(약식) 내용</li>
                <li>인성, 인간관계, 근태, 이직사유</li>
                <li>업무 스타일(업무 태도, 갈등 해결 스타일, 팀워크, 장/단점 등)</li>
                <li>윤리의식(회사의 지적 재산 유출, 자금 유용, 뇌물, 도덕적 문제 발생 등 관련 이력)</li>
                <li>리더십(조직관리 역량, 책임감 등 리더로서 필요한 자질)</li>
            </ol>
        </>,
        "status": "닫기"
    }
]
