import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

interface Card {
    id: number;
    url: string;
    title: string;
    heading: string;
    description: React.ReactNode;
};

interface Props {
    data: Array<Card>;
};
const CommitmentSectionMobile = (
    { data }: Props
) => {
    return (
        <div>
            <div className='space-y-4 mb-[60px]'>
                <h3 className='title-important !text-sm md:!text-2xl'>레퍼첵의 약속</h3>
                <div className='header-text tracking-[-0.8px] leading-[32px] md:leading-[64px]' >
                    <p>철저한 보안 정책으로 고객사와 후보자, </p>
                    <p>레퍼리 정보를 보호합니다. </p>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-3'>
                {
                    data?.map(card =>
                        <Card className='min-h-[320px] rounded-2xl md:rounded-xl flex flex-col justify-between' key={card.id} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${card.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <CardHeader>
                                <div className='flex justify-between text-xs text-[#c5c3c3] opacity-[0.8]'>
                                    <p>{card.title}</p>
                                    <p>{`0${card.id}`}</p>
                                </div>
                                <h2 className='text-[18px] text-muted-foreground font-bold max-w-[262px] break-keep'>{card.heading}</h2>
                            </CardHeader>
                            <CardContent className='text-muted-foreground'>
                                <div>
                                {card.description}
                                </div>
                            </CardContent>
                        </Card>
                    )
                }
            </div>
        </div>
    )
}

export default CommitmentSectionMobile