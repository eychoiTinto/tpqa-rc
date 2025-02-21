import PageHeader from '@/components/PageHeader'
import CommitmentSection from './_component/CommitmentSection'
import CustomerReviewSection from './_component/CustomerReviewSection'
import DirectionsSection from './_component/DirectionsSection'
import GreetingsSection from './_component/GreetingsSection'
import CompetitivenessSection from './_component/image-slider/CompetitivenessSection'
import ReputationSection from './_component/ReputationSection'
import CommitmentSectionMobile from './_component/CommitmentSectionMobile'
import { CommitmentCardsData } from '@/data/CommitmentCardData'

const AboutUsPage = () => {
    return (
        <div className='min-h-screen'>
            <div className='hidden md:block'>
                <PageHeader title='About Us' src='/assets/about-us.png' alt='about-us image' />
            </div>
            <div className='block md:hidden'>
                <PageHeader title='About Us' src='/assets/about-banner-mobile.png' alt='about-us image' />
            </div>
            <div className='space-y-[120px] md:space-y-44 mt-[60px] md:mt-[120px]'>
                <div className='container'>
                    <GreetingsSection />
                </div>
                <div className='bg-[#F4F5F7] pt-[120px] md:pt-44 '>
                    <div className='pb-[120px] md:pb-44 container'>
                        <div className='hidden md:block mb-44'>
                            <CommitmentSection />
                        </div>
                        <div className='block md:hidden'>
                            <CommitmentSectionMobile data={CommitmentCardsData} />
                        </div>
                        <CompetitivenessSection />
                    </div>
                </div>
                <div className='container space-y-44'>
                    <CustomerReviewSection />
                    <ReputationSection />
                </div>
                <div>
                    <DirectionsSection />
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage