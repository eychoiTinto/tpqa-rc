import React from 'react'
import { Button } from './button'

const ViewMoreButton = ({ title, link = '' }: { title: string, link?: string }) => {
    const isLinkValid = !!link;

    const buttonElement = (
        <Button
            variant="outline"
            className="rounded-full px-5 py-[10px] md:py-6 text-[14px] md:text-xl border-[#133761] text-[#1C4A90] hover:bg-primary hover:text-white"
        >
            {title}
        </Button>
    );

    return isLinkValid ? (
        <a href={link} className="block text-center">
            {buttonElement}
        </a>
    ) : (
        <div className="block text-center">{buttonElement}</div>
    );
}

export default ViewMoreButton