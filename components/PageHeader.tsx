import Image from 'next/image'
import React from 'react'

const PageHeader = ({ src = '', alt = '', title = '' }: { src: string, alt: string, title: string }) => {
    return (
        <div className='h-[160px] w-full relative'>
            <Image src={`${src}`} height={48} alt={`${alt}`} width={1920} className='h-full w-full object-cover' />
            <div className='absolute z-20 top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2'>
                <h1 className='header-text !text-[32px] text-muted-foreground'>{title}</h1>
            </div>
            <div className='bg-black absolute h-full w-full top-0 bg-opacity-30'>

            </div>
        </div>
    )
}

export default PageHeader