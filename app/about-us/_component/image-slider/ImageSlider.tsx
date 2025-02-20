'use client'
import * as React from 'react';
import './style.css';

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

const ExpandingCards = ({ data }: Props) => {
    const [activeId, setActiveId] = React.useState<number>(1)

    const onClick = (id: number) => setActiveId(id);

    return (
        <div className="slider-container">
            {
                data.map(card => (
                    <div
                        key={card.id}
                        className={`panel ${activeId === card.id ? 'active' : ''}`}
                        onClick={() => onClick(card.id)}
                        style={{ backgroundImage: `url(${card.url})` }}>
                        <p className={` transition-all duration-500 delay-500 ${activeId === card.id ? 'active' : 'inactive'} ${activeId === card.id ? 'opacity-100' : 'opacity-50'}`}>{`0${card.id}`}</p>
                        <h3 className={`transition-all duration-500 delay-500 ${activeId === card.id ? 'opacity-100' : 'hidden'}`}>{card.title}</h3>
                        <h2 className={`transition-all duration-500 delay-500 ${activeId === card.id ? 'opacity-100' : 'opacity-0'}`}>{card.heading}</h2>
                        <div className={`card-description transition-all duration-500 delay-500 ${activeId === card.id ? 'opacity-100' : 'opacity-0'}`}>
                            {card.description}
                        </div>
                        {
                            activeId !== card.id && <h4 className={`transition-all duration-500 delay-1000`}>{card.title}</h4>
                        }

                    </div>
                ))
            }
        </div>
    )
}

export default ExpandingCards;