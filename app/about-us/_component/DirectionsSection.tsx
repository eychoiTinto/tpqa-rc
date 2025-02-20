import React from 'react'

const DirectionsSection = () => {
    return (
        <div className='bg-primary pt-[120px] md:pt-[160px] md:pb-[80px]'>
            <h1 className='header-text text-muted-foreground text-center'>오시는 길</h1>
            <div className='container mx-auto mt-[100px] md:mt-32 px-5 md:px-0'>
                <iframe src="https://map.naver.com/p/entry/address/14142512.2388429,4509627.3986171,%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C93%EA%B8%B8%2054?c=15.38,0,0,0,dh" className='w-full rounded-[16px] h-[200px] md:h-[500px]'></iframe>
                <div className='mt-20 flex flex-col md:flex-row justify-between items-start'>
                    <div className='flex-1 space-y-[60px] md:space-y-20'>
                        <div className='text-white'>
                            <p className='content-subheading'>주소</p>
                            <p className='content-paragraph !text-white'>06151 서울특별시 강남구 선릉로93길 54, 6층 6349호 (역삼동, 일환빌딩)</p>
                        </div>
                        <div className='text-white'>
                            <p className='content-subheading'>오시는 방법</p>
                            <p className='content-paragraph !text-white'>2호선 선릉역 5번출구 역삼방향 300m 직진 후 동훈타워 지나 우회전 후 50m직진,<br className='hidden md:block' />
                                사거리에서 좌회전 CU편의점 지나 1층 투썸플레이스 건물</p>
                        </div>
                    </div>
                    <div className='md:basis-96 space-y-6 mt-[60px] md:mt-0 pb-[120px]'>
                        <div className='text-white'>
                            <p className='content-subheading'>연락처</p>
                            <p className='content-paragraph !text-white'>{'02)557-8905'}</p>
                        </div>
                        <div className='text-white'>
                            <p className='content-subheading'>팩스</p>
                            <p className='content-paragraph !text-white'>{'02)557-8908'}</p>
                        </div>
                        <div className='text-white'>
                            <p className='content-subheading'>이메일</p>
                            <p className='content-paragraph !text-white'>{'ask@refercheck.co.kr'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DirectionsSection