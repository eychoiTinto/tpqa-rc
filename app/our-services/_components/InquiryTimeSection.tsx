import React from 'react'
import InquiryCard from './InquiryCard'
import { InquiryData } from '@/data/InquiryData'
import { InquiryDataTypes } from '@/interface/InquiryDataTypes'

const InquiryTimeSection = () => {
    return (
        <div className='container md:mb-44'>
            <h2 className='title-important !text-sm md:!text-2xl'>평판조회 시기</h2>
            <h1 className='header-text leading-[32px] md:leading-[64px]'>어느 단계든, 어떤 후보자든,<br />
                (주)넥서스앤컴퍼니는 가능합니다.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    InquiryData?.map((inquiry: InquiryDataTypes) => <InquiryCard description={inquiry?.description} details={inquiry?.details} hashtags={inquiry?.hashtags} title={inquiry?.title} key={inquiry?.title} />)
                }
            </div>
        </div>
    )
}

export default InquiryTimeSection