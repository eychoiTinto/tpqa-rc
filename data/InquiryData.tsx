import { InquiryDataTypes } from "@/interface/InquiryDataTypes";

export const InquiryData: InquiryDataTypes[] = [
    {
        "title": "1차 면접 전",
        "description": <><p>서류전형 합격자 중<br /> 특정 직무, 특정 직군의 지원자</p></>,
        "details": <><p>
            제출한 이력서, 경력기술서 등 서류의 진위를<br className="hidden md:block" />
            확인하여, 부적절한 지원자를 면접 전에 필터링<br className="hidden md:block" />
            합니다. 애초에 면접이 진행될 필요가 없는 지원자를 필터링하여 불필요한 면접 시간/비용을 절감합니다.
        </p>
        </>,
        "hashtags": <>
            <span>#학력 진위 여부 조회 &nbsp;&nbsp;</span>
            <span>#경력 진위 여부 조회</span>
        </>
    },
    {
        "title": "1차 면접 후",
        "description": <p>1차 면접에서 합격/불합격을<br className="hidden md:block" /> 결정하기 어려웠던 지원자</p>,
        "details": <>
            <p>
                1차 면접 결과를 확신할 수 있으며, 회사와 직무에<br className="hidden md:block" />
                적합한 지원자만 2차 면접을 진행하여 효율적인 면접을 진행할 수 있습니다. 확인하지 못했던 사항, 좀 더 검증이 필요한 부분을 면밀하게 검토할 수 있습니다.
            </p>
        </>,
        "hashtags": <>
            <span>#평판조회 (성과/역량/인성 등 전반)</span>
        </>
    }, {
        "title": "2차 면접 후",
        "description": <p>2차 면접 결과, 합격 또는<br className="hidden md:block" />좀 더 확인이 필요한 지원자</p>,
        "details": <>
            <p>
                이전의 채용과정에서 학력과 경력의 진위 여부를<br className="hidden md:block"/>
                조회하지 않은 경우 함께 조회하는 것을 추천합니다.<br className="hidden md:block"/>
                최종 당락을 결정하는데 평판조회 결과를 참고합니다.
            </p>
        </>,
        "hashtags": <>
            <span>#학력 진위 여부 조회&nbsp;&nbsp;</span>
            <span>#경력 진위 여부 조회</span><br />
            <span>#평판조회 (전반)&nbsp;</span>
        </>
    }
]