/* eslint-disable @next/next/no-img-element */

"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
    const pathname = usePathname()
    const isHomePage = pathname === "/"

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about-us", label: "About Us" },
        { href: "/our-services", label: "Our Service" },
        { href: "/kad-hpi", label: "KAD.HPI" },
        { href: "/faq", label: "FAQ" },
        { href: "/korean", label: "오프라인 일반조회" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full py-[18px] lg:py-7 px-6 md:px-10 font-pretendard font-normal border-b border-white-border">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold flex items-center">
                        {isHomePage ? <img src="logo.svg" alt="refceck logo" className="h-[18px] md:h-7 w-[132.429px] md:w-[206px]" /> : <img src="/logo-dark.png" alt="logo icon of refcheck" className="h-[18px] md:h-7 w-[132.429px] md:w-[206px]"/>}
                </Link>

                {/* Desktop Navigation */}
                <div className={`text-base hidden md:flex items-center gap-10 ${isHomePage ? "text-white" : "text-primary"}`}>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-gray-200 transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className={isHomePage ? "text-white p-0" : "p-0 text-primary"}>
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <SheetTitle></SheetTitle>
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-medium hover:text-gray-200 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>

                </Sheet>
            </div>
        </nav>
    )
}

export default Navbar

