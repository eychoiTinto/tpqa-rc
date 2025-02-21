'use client'
import ViewMoreButton from '@/components/ui/ViewMoreButton';
import { caseStudies } from '@/data/RefCheckData';
import { CaseStudy } from '@/interface/RefCheckDataTypes';
import React, { useState } from 'react';
import InteractiveCard from './CardList';
export const HeroTitlePosition = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col gap-4 items-center text-center justify-center w-full">{children}</div>
);


const CustomerReviewSection = () => {
    const [skip, setSkip] = useState(4)

    return (
        <div className='bg-white container mx-auto'>
            <h2 className='header-text'>고객사 의뢰 후기 및 검증 사례</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-16'>
                {
                    caseStudies?.slice(0, skip)?.map((caseStudy: CaseStudy) => <InteractiveCard heading={caseStudy.heading} subtitle={caseStudy.subtitle} description={caseStudy.description} key={caseStudy.id} title={caseStudy.title} backgroundImage={caseStudy.backgroundImage} id={String(caseStudy.id)} />)
                }
            </div>
            {skip < caseStudies.length && (
                <div onClick={() => setSkip(prev => prev + 4)}>
                    <ViewMoreButton title='Read More' />
                </div>
            )}
        </div>
    )
}

export default CustomerReviewSection