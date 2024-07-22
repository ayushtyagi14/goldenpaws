import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-[70vh] lg:h-[95vh]" style={{ backgroundImage: 'url(/assets/puppy-hero.jpg)' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white px-4 md:w-[60%] mx-auto"
                >
                    <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold mb-2`}>
                        Find Your New Best Friend
                    </h1>
                    <div className="mt-4 flex justify-center">
                        <input
                            type="text"
                            placeholder="Search for a breed..."
                            className="px-5 py-3 rounded-l-lg w-[80%] lg:w-[50%] text-gray-700 placeholder:text-[14px] text-[14px] uppercase tracking-widest"
                        />
                        <button className="text-[#fdf3e9] bg-[#333333] px-5 py-3 rounded-r-lg uppercase font-medium tracking-widest">
                            Search
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
};

export default Hero;
