
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
    return (
        <div id="contact" className="bg-[#0A2844] text-muted-foreground py-[120px] md:py-40">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-10 md:mb-[60px] space-y-3 md:space-y-5">
                    <div className="space-y-1">
                        <img src="logo.svg" alt="refercheck logo" className="h-3 md:h-6" />
                        <h1 className="text-xl md:text-[40px] font-semibold mb-4 tracking-[-0.8px] leading-[32px] md:leading-[64px]">Contact Consulting</h1>
                    </div>
                    <p className="hidden md:block text-muted-foreground text-sm md:text-xl md:leading-[32px]">
                        <strong>회사 소개서(고객사 포함), 평판조회 샘플은 아래 양식으로 요청해 주세요.</strong>
                        <br />
                        <span>아래 양식에 문의 내용을 남겨주시면 확인 후 회신드리도록 하겠습니다.</span>
                    </p>
                    <p className="block md:hidden text-muted-foreground text-sm md:text-xl leading-[22.4px] md:leading-[32px]">
                        <strong>회사 소개서(고객사 포함), 평판조회 샘플은<br />아래 양식으로 요청해주세요.</strong>
                        <br />
                        <span>아래 양식에 문의 내용을 남겨주시면 확인 후<br />회신드리도록 하겠습니다.</span>
                    </p>
                </div>

                {/* Form */}
                <Card className="bg-transparent border-none" >
                    <CardContent className="p-0">
                        <form id="contactForm" className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="company" className="text-muted-foreground text-sm md:text-lg">
                                        회사명*
                                    </Label>
                                    <Input id="company" className="input-box" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="department" className="text-muted-foreground text-sm md:text-lg">
                                        담당자 성함*
                                    </Label>
                                    <Input id="department" className="input-box" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="contact" className="text-muted-foreground text-sm md:text-lg">
                                        연락처*
                                    </Label>
                                    <Input id="contact" className="input-box" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-muted-foreground text-sm md:text-lg">
                                        이메일*
                                    </Label>
                                    <Input id="email" type="email" className="input-box" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="title" className="text-muted-foreground text-sm md:text-lg">
                                    홈페이지
                                </Label>
                                <Input id="title" className="input-box" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-muted-foreground text-sm md:text-lg">
                                    문의내용*
                                </Label>
                                <Textarea id="message" className="min-h-[200px] input-box resize-none" required />
                            </div>
                            <hr className="border border-white-border" />
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-muted-foreground text-sm md:text-xl font-semibold tracking-[-0.4px]">
                                        개인정보 수집 및 이용 동의
                                    </h3>
                                    <div className="border border-white-border rounded-lg p-4 text-sm:text-base text-muted-foreground max-h-60 overflow-y-scroll">
                                        <p className="mb-4">
                                            이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 하기 목적 이외의 용도로는 사용되지 않습니다.
                                        </p>
                                        <div className="space-y-4 text-xs md:text-base tracking-[-0.24px] md:tracking-[0.32px]">
                                            <div>
                                                <p className="font-medium mb-2">1. 개인정보의 수집 및 이용목적</p>
                                                <p className="secondary-text">㈜레퍼첵앤커리어는 서비스 신청, 제공, 등을 위하여 개인정보를 수집하고 있습니다.</p>
                                            </div>
                                            <div>
                                                <p className="font-medium mb-2">2. 개인정보의 수집 항목 및 방법</p>
                                                <p className="secondary-text">㈜레퍼첵앤커리어는 서비스 신청, 제공, 등을 위하여 다음과 같은 개인정보를 수집하고 있습니다.</p>
                                                <p className="secondary-text">– 담당자 성명, 연락처, 이메일</p>
                                                <p className="secondary-text">㈜레퍼첵앤커리어의 서비스 이용자 개인정보 수집 방법은 다음과 같습니다.</p>
                                                <p className="secondary-text">– 홈페이지 및 이메일을 통한 서비스 접수</p>
                                            </div>
                                            <div>
                                                <p className="font-medium mb-2">3. 개인정보의 보유 및 이용기간</p>
                                                <p className="font-medium">㈜레퍼첵앤커리어의 서비스 이용자 개인정보 수집 방법은 다음과 같습니다.</p>
                                                <p>– 홈페이지 및 이메일을 통한 서비스 접수</p>
                                                <p className="secondary-text">
                                                    서비스 이용자가 ㈜레퍼첵앤커리어의 서비스를 계속 이용하는 동안 ㈜레퍼첵앤커리어는 이용자의 개인정보를 계속
                                                    보유하며 서비스 제공 등을 위해 이용합니다.
                                                </p>
                                                <ol className="list-decimal pl-4">
                                                    <li>
                                                        원칙적으로, 개인정보 수집 및 이용목적이 달성되면 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는
                                                        아래의 이유로 명시한 기간 동안 보존합니다.
                                                    </li>
                                                </ol>
                                                <p>* 보존 항목</p>
                                                <p>이메일 주소, 담당자성명, 연락처, 이메일</p>
                                                <p>– 보존 기간 : 7년</p>
                                                <ol className="list-decimal pl-4 mt-2">
                                                    <li>
                                                        상법 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 법령에서 규정한 보존기간 동안 거래내역과 최소한의
                                                        기본정보를 보유합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용합니다.
                                                    </li>
                                                </ol>
                                                <ul>
                                                    <li>- 계약 또는 청약철회 등에 관한 기록 : 5년</li>
                                                    <li>- 대금결제 및 재화 등의 공급에 관한 기록 : 5년</li>
                                                    <li>- 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-medium mb-2">4. 동의 거부 관리</p>
                                                <p>
                                                    - 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부하실 권리가 있습니다. 다만, 개인정보의 수집/이용에
                                                    동의를 거부하시는 경우에 서비스 이용에 제한이 있을 수 있습니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-10 items-center justify-beween w-full">
                                    <div className="space-y-2 md:space-y-1 w-full">
                                        <div className="flex items-center justify-center md:justify-start space-x-2">
                                            <Label htmlFor="terms" className="text-sm md:text-base text-gray-400 font-normal tracking-[-0.28px] md:tracking-[-0.32px]">
                                                위 개인정보 수집 및 이용 동의 샤항을 읽고 동의하십니까?
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-4 justify-center md:justify-start">
                                            <Checkbox id="agree" required />
                                            <Label htmlFor="agree" className="text-muted-foreground font-semibold text-base md:text-xl">
                                                예 동의합니다.
                                            </Label>
                                        </div>
                                    </div>
                                    <div className="md:flex">
                                        <Button className="bg-white text-[#051C2E] text-sm md:text-lg hover:bg-gray-100 rounded-full py-4 md:py-7 px-4 md:px-7">Send Message</Button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}

