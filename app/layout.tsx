import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "레퍼첵 ReferCheck | 채용 리스크 예방! 지금 바로 평판 조회하세요.",
  description: "이력서와 면접만 믿으시나요? 검증된 인재 채용, ReferCheck 레퍼첵이 도와드립니다.",
  keywords: ["레퍼첵,", "refercheck", "평판조회", "인사검증", "채용검증", "온라인 평판조회", "AI 채용", "HR", "인재검증", "백그라운드 체크", "오프라인 평판조회", "이력서검증", "HR평가", "기업채용솔루션", "인재검증서비스", "평판조회 플랫폼", "경력검증", "AI기반", "AI기반평판조회", "기업인재평가", "비대면채용", "블라인드채용", "글로벌평판조회", "인공지능채용", "레퍼런스체크", "AI평판조회", "후보자검증", "레퍼리", "평판조회보고서", "평판조회리포트", "후보자역량평가", "HR평가도구", "조직적합도평가", "컬처핏", "후보자보고서", "후보자평판조회", "채용솔루션", "referchec report", "레퍼첵리포트", "reference check", "채용평판조회", "인재평판조회", "직무평판조회", "기업평판조회", "평판조회서비스", "인사평판조회", "후보자평판조회", "평판조사"],
  other: {
    author: "(주)넥서스 앤 컴퍼니",
  },
  openGraph: {
    title: "레퍼첵 ReferCheck | 채용 리스크 예방! 지금 바로 평판 조회하세요.",
    description: "이력서와 면접만 믿으시나요? 검증된 인재 채용, ReferCheck 레퍼첵이 도와드립니다.",
    url: "https://www.refercheck.kr",
    siteName: "레퍼첵 ReferCheck",
    images: [
      {
        url: "https://refercheck.kr/og-image.png",
        width: 1200,
        height: 630,
        alt: "사이트 미리보기 이미지",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "레퍼첵 ReferCheck | 채용 리스크 예방! 지금 바로 평판 조회하세요.",
    description: "이력서와 면접만 믿으시나요? 검증된 인재 채용, ReferCheck 레퍼첵이 도와드립니다.",
    images: ["https://refercheck.kr/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
