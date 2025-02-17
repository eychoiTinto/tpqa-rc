import React from 'react'
import { servicesData } from '@/data/ServicesData'
import { ServicesDataTypes } from '@/interface/ServicesDataTypes'
import OurServicesCard from './OurServicesCards'
const ReputationInquirySection = () => {
    return (
        <div className='container mx-auto pt-[100px]'>
            <div className='space-y-4 md:space-y-3'>
                <h2 className='title-important md:!text-2xl'>평판조회 종류</h2>
                <h1 className='header-text leading-[32px] md:leading-[64px]'>국내, 해외 어느 지역이든,<br />
                    (주)넥서스앤컴퍼니는 가능합니다.</h1>
            </div>
            <div className='mt-10 md:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 h-full'>
                {
                    servicesData?.map((service: ServicesDataTypes) => <OurServicesCard key={service?.title} title={service?.title} status={service?.status} subtitle={service?.subtitle} badge={service?.badge} description={service?.description} />)
                }
            </div>
        </div>
    )
}

export default ReputationInquirySection