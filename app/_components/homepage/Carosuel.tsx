'use client'
import InteractiveCard from '@/app/about-us/_component/CardList'
import { caseStudies } from '@/data/RefCheckData'
import { CaseStudy } from '@/interface/RefCheckDataTypes'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
import './embla.css'

type PropType = {
  options?: EmblaOptionsType,
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {
            caseStudies?.map((caseStudy: CaseStudy) =>
              <div key={caseStudy.id} className='embla__slide'>
                <InteractiveCard heading={caseStudy.heading} subtitle={typeof caseStudy.subtitle === "string" ? caseStudy.subtitle : ""} description={caseStudy.description} key={caseStudy.id} title={caseStudy.title} backgroundImage={caseStudy.backgroundImage} id={String(caseStudy.id)} />
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
