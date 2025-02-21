import { Card, CardHeader } from '@/components/ui/card'
import { InquiryDataTypes } from '@/interface/InquiryDataTypes'

const InquiryCard = ({ description, details, hashtags, title }: InquiryDataTypes) => {
    return (
        <div>
            <Card className=' md:bg-[#F4F5F7] shadow-none h-full rounded-2xl md:border-none p-4 md:p-8 '>
                <CardHeader className='p-0 flex flex-col justify-between space-y-4 md:space-y-6'>
                    <h2 className='content-paragraph font-semibold'>{title}</h2>
                    <div className='text-base md:text-[28px] mb-8 md:mb-20 leading-5 md:leading-[39.2px] text-primary font-semibold text-left'>{description}</div>
                    <hr className='border-px border-[#C4C4CC]'/>
                    <div className='content-paragraph '>{details}</div>
                    <div className='content-paragraph !text-[#1C4A90]'>{hashtags}</div>
                </CardHeader>
            </Card>
        </div>
    )
}

export default InquiryCard