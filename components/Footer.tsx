/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from './ui/button'

const Footer = () => {
    return (
        <div className='bg-[#0A2844] border-t-2 border-white-border w-full'>
            <div className='container py-[60px] flex flex-col md:flex-row justify-between items-center w-full'>
                <div className='space-y-7 flex-1 w-full'>
                    <img src="logo.svg" alt="refercheck logo" className="h-7" />
                    <div className='w-full'>
                        <div className='space-y-[10px]'>
                            <div className='flex flex-col md:flex-row gap-4 items-start md:items-center'>
                                <div className='footer-subtext'>
                                    <p className='text-muted-foreground/50'>사업자등록번호</p>
                                    <p className='font-semibold text-muted-foreground'>591-81-02804</p>
                                </div>
                                <div className='border-vertical'></div>
                                <div className='footer-subtext'>
                                    <p className='text-muted-foreground/50'>대표자</p>
                                    <p className='font-semibold text-muted-foreground'>정서진</p>
                                </div>
                                <div className='border-vertical'></div>
                                <div className='footer-subtext'>
                                    <p className='text-muted-foreground/50'>연락처</p>
                                    <p className='font-semibold text-muted-foreground'>{`02)557-8905`}</p>
                                </div>
                                <div className='border-vertical'></div>
                                <div className='footer-subtext'>
                                    <p className='text-muted-foreground/50'>팩스</p>
                                    <p className='font-semibold text-muted-foreground'>{`02)557-8908`}</p>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-4 items-start md:items-center'>
                                <div className='!hidden md:!flex footer-subtext'>
                                    <p className='text-muted-foreground/50'>주소</p>
                                    <p className='font-semibold text-muted-foreground '>{`06151 서울특별시 강남구 선릉로93길 54, 6층 6349호(역삼동, 일환빌딩)`}</p>
                                </div>
                                <div className='flex md:hidden footer-subtext'>
                                    <p className='text-muted-foreground/50'>주소</p>
                                    <p className='font-semibold text-muted-foreground '>06151 서울특별시 강남구 선릉로93길 54, 6층
                                        <br />
                                    6349호(역삼동, 일환빌딩)</p>
                                </div>
                                <div className='border-vertical'></div>
                                <div className='footer-subtext'>
                                    <p className='text-muted-foreground/50'>이메일</p>
                                    <p className='font-semibold text-muted-foreground'>{`ask@refercheck.co.k`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/policy">
                    <Button className='mt-10 border rounded-full text-sm md:text-xl py-[10px] md:py-7 px-5 md:px-6 border-white-border'>
                        개인정보처리방침
                    </Button>
                </Link>
            </div>
            {/* footer 2 */}
            <div className="bg-[rgba(255,255,255,0.02)] py-6 border-t border-white-border">
                <div className='container mx-auto flex justify-between items-center text-muted-foreground text-sm md:text-base tracking-[-0.28px]'>
                    <span>&copy; {new Date().getFullYear()} ReferCheck Co.,Ltd All rights reserved.</span>
                    <a href="https://www.linkedin.com/showcase/refercheck-official" target="_blank">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                viewBox="0 0 32 32"
                                fill="none"
                            >
                                <path
                                    d="M26.2405 2.56006H5.76055C3.99415 2.56006 2.56055 3.99366 2.56055 5.76006V26.2401C2.56055 28.0065 3.99415 29.4401 5.76055 29.4401H26.2405C28.0069 29.4401 29.4405 28.0065 29.4405 26.2401V5.76006C29.4405 3.99366 28.0069 2.56006 26.2405 2.56006ZM10.8805 12.8001V24.9601H7.04055V12.8001H10.8805ZM7.04055 9.26086C7.04055 8.36486 7.80855 7.68006 8.96055 7.68006C10.1125 7.68006 10.8357 8.36486 10.8805 9.26086C10.8805 10.1569 10.1637 10.8801 8.96055 10.8801C7.80855 10.8801 7.04055 10.1569 7.04055 9.26086ZM24.9605 24.9601H21.1205C21.1205 24.9601 21.1205 19.0337 21.1205 18.5601C21.1205 17.2801 20.4805 16.0001 18.8805 15.9745H18.8293C17.2805 15.9745 16.6405 17.2929 16.6405 18.5601C16.6405 19.1425 16.6405 24.9601 16.6405 24.9601H12.8005V12.8001H16.6405V14.4385C16.6405 14.4385 17.8757 12.8001 20.3589 12.8001C22.8997 12.8001 24.9605 14.5473 24.9605 18.0865V24.9601Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer