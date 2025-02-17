import React from 'react'
import PricingCard from './PricingCard'

const MainInfo = () => {
    return (
        <div className='px-5 md:px-0'>
            <h1 className='header-text mb-10'>가격정보</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6'>
                <PricingCard
                    title="온라인 검사"
                    features={[
                        "온라인으로 시간과 장소 제약없이 검사진행 가능",
                        "응시자 검사완료 하면 바로 결과확인 가능",
                        "결과 확인은 온라인으로 가능"
                    ]}
                    price="18,000"
                    bgColor="bg-[#1C4A90]"
                />
                <PricingCard
                    title="오프라인 검사"
                    features={[
                        "오프라인으로 검사진행",
                        "문제지, 답안지, 검사안내자료 우편으로 송부",
                        "검사 후 답안지를 전산처리하여 온라인으로 결과확인"
                    ]}
                    price="25,000"
                    bgColor="bg-[#0A2844]"
                />
            </div>
        </div>
    )
}

export default MainInfo