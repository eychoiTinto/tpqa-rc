import React from 'react'

const PageHeader = ({ src = '', alt = '', title = '' }: { src: string, alt: string, title: string }) => {
    return (
        <div className='h-[160px] w-full relative'>
            <img src={`${src}`} width="1920" height="48" alt={alt} className='h-full w-full object-cover' />
            <div className='absolute z-20 top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-full'>
                <h1 className='text-[32px] lg:text-[40px] font-semibold leading-[32px] md:leading-[64px] text-muted-foreground w-full text-center'>{title}</h1>
            </div>
            <div className='bg-black absolute h-full w-full top-0 bg-opacity-30'>

            </div>
        </div>
    )
}

export default PageHeader