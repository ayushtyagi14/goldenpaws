import { platypi } from '@/app/layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const Hero = ({ heroData }) => {
    return (
        <div className='pt-28 py-16 px-4 lg:px-16 lg:max-w-7xl mx-auto'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='grid md:grid-cols-2 grid-cols-1 justify-items-center items-center'
            >
                <div>
                    <img src={heroData.coverImg} alt="Chow Chow" className='object-cover rounded-[24px]' />
                </div>
                <div className='flex flex-col gap-3 md:mt-0 mt-8'>
                    <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[36px] font-bold text-center md:text-left`}>
                        {heroData.name}
                    </h1>
                    <p className='text-[14px] md:text-[14px] tracking-widest'>
                        {heroData.description}
                    </p>
                    <p className='tracking-wide text-center md:text-left'>
                        Starting Price:
                        <b className={`${platypi.className} ml-3 text-[18px]`}>₹ {heroData.price}</b>
                    </p>
                    <button className='text-center bg-[#333333] hover:bg-[#333333e8] text-[#fdf3e9] md:px-8 px-16 py-2 rounded-[8px] uppercase font-medium tracking-widest md:w-max w-full'>
                        Get Yours Now
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero
