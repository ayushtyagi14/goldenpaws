import { platypi } from '@/app/layout';
import React from 'react';

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white p-4">
                <p className={`${platypi.className} lg:text-[56px] text-[32px] lg:w-[60%] 2xl:w-[44%] w-[90%] mx-auto`}>
                    Your Journey to Finding the Perfect Companion Starts Here
                </p>
            </div>
            <div className="w-full h-screen overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover hidden lg:block"
                >
                    <source
                        src="/assets/hero-video.mp4"
                        type="video/mp4"
                    />
                </video>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover block lg:hidden"
                >
                    <source
                        src="/assets/hero-video-phone.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    );
};

export default Hero;
