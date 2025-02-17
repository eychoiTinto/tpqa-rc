import { CommitmentCardsData } from '@/data/CommitmentCardData'
import ExpandingCards from './image-slider/ImageSlider'

const CommitmentSection = () => {
  return (
    <div className='w-full'>
      <div className='space-y-4 mb-[60px]'>
        <h3 className='title-important'>레퍼첵의 약속</h3>
        <div className='header-text tracking-[-0.8px] leading-[32px] md:leading-[64px]' >
          <p>철저한 보안 정책으로 고객사와 후보자, </p>
          <p>레퍼리 정보를 보호합니다. </p>
        </div>
      </div>
      <div className='w-full container mx-auto'>
        <ExpandingCards data={CommitmentCardsData} />
      </div>
    </div>
  )
}

export default CommitmentSection

