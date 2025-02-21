import React from 'react'
import { Button } from './button'

const ViewMoreButton = ({ title }: { title: string }) => {
    return (
        <a href="/about-us#aboutCase" className="block mt-10 md:mt-[60px] text-center">
            <Button
                variant="outline"
                className="rounded-full px-5 py-[10px] md:py-6 text-[14px] md:text-xl border-[#133761] text-[#1C4A90] hover:bg-primary hover:text-white"
            >
                {title}
            </Button>
        </a>
    )
}

export default ViewMoreButton