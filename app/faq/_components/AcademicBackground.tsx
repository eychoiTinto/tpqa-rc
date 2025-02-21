import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

const FAQBackground = ({ title, description, verificationPoints, cases, cardBackground, subSectionTop, subSectionBottom }: {
    title: ReactNode;
    description: ReactNode;
    subSectionTop: ReactNode;
    subSectionBottom: ReactNode;
    verificationPoints: string[];
    cardBackground: boolean;
    cases: { buttonText: string; title: string }[];
}) => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between w-full items-start gap-10 md:gap-52'>
                <div className='w-full'>
                    <div className="header-text">{title}</div>
                    <div className='space-y-4 mt-5 md:mt-[85px]'>
                        <h3 className='title-important'>체크사항</h3>
                        <div className='space-y-2 md:space-y-4'>
                            {verificationPoints.map((point, index) => (
                                <AcademicCard key={index} title={point} cardBackground={cardBackground} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='space-y-5 md:space-y-7 w-full md:min-w-[891px]'>
                    <div className='text-[#202021] text-sm md:text-[28px] tracking-[-0.28px] leading-[22.4px] md:leading-[44.8px]'>{description}</div>
                    <hr />
                    <div className='space-y-4 text-xs md:text-xl tracking-[0.24px] md:tracking-[-0.4px]'>
                        <h2 className='text-[#202021] '>{subSectionTop}</h2>
                        <div className='space-y-4'>
                            {cases.map((item, index) => (
                                <BadgePoint key={index} buttonText={item.buttonText} title={item.title} />
                            ))}
                        </div>
                        <h2 className='text-[#202021] text-xs md:text-base tracking-[0.24px] md:tracking-[-0.32px] pt-3'>{subSectionBottom}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQBackground;

const BadgePoint = ({ buttonText, title }: { buttonText: string; title: string }) => {
    return (
        <div className='flex items-center gap-3'>
            <Badge className='px-3 py-0 md:px-[12px] tracking-[-0.32px] text-xs md:text-base bg-[#1C4A90] hover:bg-primary leading-6'>{buttonText}</Badge>
            <div>
                <span>{title}</span>
            </div>
        </div>
    );
};

const AcademicCard = ({ title, cardBackground }: { title: string, cardBackground: boolean }) => {
    return (
        <Card className={`shadow-none rounded-xl border-none w-full md:min-w-80 ${cardBackground && 'bg-[#F4F5F7]'}`}>
            <CardHeader className='p-4 md:p-5'>
                <div className='flex justify-between items-center'>
                    <CardTitle className='text-[#202021] font-normal text-sm md:text-xl'>{title}</CardTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9.55008 17.6538L4.21558 12.3193L5.28458 11.2501L9.55008 15.5156L18.7156 6.3501L19.7846 7.41935L9.55008 17.6538Z" fill="#1C4A90" />
                    </svg>
                </div>
            </CardHeader>
        </Card>
    );
};
