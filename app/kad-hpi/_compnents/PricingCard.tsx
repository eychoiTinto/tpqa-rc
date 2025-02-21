import React from 'react';

interface PricingCardProps {
    title: string;
    features: string[];
    price: string;
    bgColor: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, features, price, bgColor }) => {
    return (
        <div className={`p-4 md:p-8 rounded-2xl text-muted-foreground space-y-[14px] ${bgColor}`}>
            <h1 className='text-base md:text-[28px] font-semibold  leading-[25.6px] md:leading-[44.8px] tracking-[-0.56px] text-muted-foreground'>{title}</h1>
            <div className='ml-4'>
                <ul className='list-disc list-outside font-normal space-y-1 text-sm md:text-xl leading-[22.4px] md:leading-[32px] tracking-[-0.28px] md:tracking-[-0.4px]'>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <div className='space-y-1 md:space-y-2 mt-5 md:mt-0 '>
                    <div className='flex w-full justify-end text-sm md:text-xl text-muted-foreground/70'>
                        <p>(부가세 별도)</p>
                    </div>
                    <div className='flex gap-2 items-center justify-end'>
                        <span className='header-text !text-[32px]'>{price}원</span>
                        <span className='text-xl md:text-3xl text-muted-foreground/80'>/ 인</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
