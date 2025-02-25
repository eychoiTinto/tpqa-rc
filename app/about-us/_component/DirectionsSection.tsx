"use client"
import React, { useEffect, useState, useRef } from 'react'
declare global {
    interface Window {
        naver: typeof naver;
    }
}

const DirectionsSection = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        // 이미 스크립트가 로드된 경우
        if (window.naver) {
        initMap();
        return;
        }

        // 스크립트가 중복 추가되지 않도록 확인
        if (!document.getElementById("naver-map-script")) {
        const script = document.createElement("script");
        script.id = "naver-map-script";
        script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=5alxaf9vys`;
        script.async = true;
        script.onload = () => {
            setMapLoaded(true);
        };
        document.body.appendChild(script);
        } else {
        setMapLoaded(true);
        }
    }, []);

    // 지도가 로드된 후 실행
    useEffect(() => {
        if (mapLoaded) {
        initMap();
        }
    }, [mapLoaded]);
    

    function initMap() {
        if (!mapRef.current || !window.naver) return;
        const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(37.504411, 127.044321),
        zoom: 15,
        });

        new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.504411, 127.044321),
        map,
        });
    }

    return (
        <div className='bg-primary pt-[120px] md:pt-[160px] md:pb-[80px]'>
            <h1 className='header-text text-muted-foreground text-center'>오시는 길</h1>
            <div className='container mx-auto mt-[100px]'>
                
                <div ref={mapRef} className="w-full h-[400px] md:h-[500px] bg-gray-300 rounded-[16px] overflow-hidden" />
                <div className='mt-20 flex flex-col md:flex-row justify-between items-start'>
                    <div className='flex-1 space-y-[60px] md:space-y-20'>
                        <div className='text-white'>
                            <p className='content-subheading'>주소</p>
                            <p className='content-paragraph !text-white'>06151 서울특별시 강남구 선릉로93길 54, 6층 6349호 (역삼동, 일환빌딩)</p>
                        </div>
                        <div className='text-white'>
                            <p className='content-subheading'>오시는 방법</p>
                            <p className='content-paragraph !text-white'>2호선 선릉역 5번출구 역삼방향 300m 직진 후 동훈타워 지나 우회전 후 50m직진,<br className='hidden md:block' />
                                사거리에서 좌회전 CU편의점 지나 1층 투썸플레이스 건물</p>
                        </div>
                    </div>
                    <div className='md:basis-96 space-y-6 mt-[60px] md:mt-0 pb-[120px]'>
                        <div className='text-white'>
                            <p className='content-subheading'>연락처</p>
                            <p className='content-paragraph !text-white'>{'02)557-8905'}</p>
                        </div>
                        <div className='text-white'>
                            <p className='content-subheading'>팩스</p>
                            <p className='content-paragraph !text-white'>{'02)557-8908'}</p>
                        </div>
                        <div className='text-white'>
                            <p className='content-subheading'>이메일</p>
                            <p className='content-paragraph !text-white'>{'ask@refercheck.co.kr'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DirectionsSection