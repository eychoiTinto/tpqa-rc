import PageHeader from '@/components/PageHeader'
import ReputationInquirySection from './_components/ReputationInquirySection'
import InquiryTimeSection from './_components/InquiryTimeSection'
import ReferenceCheckKeyItems from './_components/ReferenceCheckKeyItems'
import CertificationTable from './_components/CertificationTable'
import TimelineSection from './_components/TimelineSection'
import CallToAction from './_components/CallToAction'


const OurServices = () => {
    return (
        <div>
            <PageHeader title='Our Services' src='/assets/ourservices.png' alt='our services header' />
            <div className='px-5 md:px-0 space-y-28 md:space-y-[160px]'>
                <ReputationInquirySection />
                <InquiryTimeSection />
                <ReferenceCheckKeyItems />
            </div>
                <CertificationTable />
            <TimelineSection />
            <CallToAction />
        </div>
    )
}

export default OurServices