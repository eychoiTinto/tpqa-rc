"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ServicesDataTypes } from "@/interface/ServicesDataTypes";
import { cn } from "@/lib/utils";
import * as React from "react";

export default function OurServicesCard({ title, subtitle, description, badge }: ServicesDataTypes) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div>
      <Card className={`border ${isExpanded ? 'bg-[#F4F5F7]' : 'bg-muted-foreground'} border-[#C4C4CC] shadow-none rounded-2xl p-0`}>
        <CardContent className="p-0">
          <div className="px-4 md:px-8 pt-4 md:pt-9 pb-4 md:pb-0 ">
            <div
              className={`text-xs md:text-base w-fit px-[10px] md:px-4 py-1.5 rounded-full ${badge === "특정 직무/직급"
                ? "bg-none border border-gray-500 text-primary"
                : "bg-primary text-white"
                }`}
            >
              {badge}
            </div>
            <div className="mt-4 md:mt-7  mb-4">
              <div className="space-y-1">
                <div className="text-base md:text-[28px] text-primary font-semibold tracking-[-0.56px] md:leading-[44px]">{title}</div>
                <div className="text-sm md:text-xl text-[#202021] tracking-[-0.4px]">{subtitle}</div>
              </div>
            </div>
            {/* Mobile auto expanding */}
            <div className="block md:hidden space-y-4">
              <hr className="max-w-[100%] mx-auto border" />
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 max-h-[500px]",
                )}
              >
                <div className="content-paragraph">{description}</div>
              </div>
            </div>

            {isExpanded && <hr className="max-w-[100%] mx-auto border" />}
            {
              isExpanded && <div
                className={cn(
                  "py-4 hidden md:block overflow-hidden transition-all duration-300",
                )}
              >
                <div className="content-paragraph">{description}</div>
              </div>
            }
          </div>
          <hr className="hidden md:block max-w-[100%] mx-auto" />

          <Button
            variant="ghost"
            className={cn(
              "hidden md:block w-full h-12 text-xl border-none font-normal !rounded-none ",
              isExpanded && "border-t",
            )}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center justify-center gap-2 w-full px-3">
              {!isExpanded ? (
                <>
                  <span>자세히 보기</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 14.9335L19.7155 7.21829C19.8628 7.07079 20.04 6.99804 20.247 7.00004C20.4542 7.00187 20.6314 7.07654 20.7788 7.22404C20.9263 7.37137 21 7.54862 21 7.75579C21 7.96279 20.9263 8.14004 20.7788 8.28754L13.1365 15.924C12.975 16.0855 12.7949 16.2035 12.5962 16.2778C12.3974 16.3521 12.1987 16.3893 12 16.3893C11.8013 16.3893 11.6026 16.3521 11.4037 16.2778C11.2051 16.2035 11.025 16.0855 10.8635 15.924L3.22125 8.28154C3.07375 8.13421 3.001 7.95796 3.003 7.75279C3.00483 7.54762 3.0795 7.37137 3.227 7.22404C3.37433 7.07654 3.55158 7.00279 3.75875 7.00279C3.96575 7.00279 4.143 7.07654 4.2905 7.22404L12 14.9335Z"
                      fill="#636365"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span>닫기</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M12.4998 9.06646L20.2153 16.7817C20.3626 16.9292 20.5398 17.002 20.7468 17C20.9539 16.9981 21.1312 16.9235 21.2785 16.776C21.426 16.6286 21.4998 16.4514 21.4998 16.2442C21.4998 16.0372 21.426 15.86 21.2785 15.7125L13.6363 8.07596C13.4748 7.91446 13.2947 7.79654 13.096 7.72221C12.8972 7.64788 12.6984 7.61071 12.4998 7.61071C12.3011 7.61071 12.1023 7.64788 11.9035 7.72221C11.7048 7.79654 11.5248 7.91446 11.3633 8.07596L3.721 15.7185C3.57351 15.8658 3.50076 16.042 3.50276 16.2472C3.50459 16.4524 3.57926 16.6286 3.72676 16.776C3.87409 16.9235 4.05134 16.9972 4.2585 16.9972C4.46551 16.9972 4.64276 16.9235 4.79025 16.776L12.4998 9.06646Z"
                      fill="#636365"
                    />
                  </svg>
                </>
              )}
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
