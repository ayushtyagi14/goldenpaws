import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-[70vh] lg:h-[95vh]" style={{ backgroundImage: "url('/assets/blogs-hero.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white px-4 mx-auto"
                >
                    <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold mb-4`}>
                        Our Blogs
                    </h1>
                    <p className="lg:text-[24px] text-[18px] mb-6 uppercase tracking-widest md:w-[60%] mx-auto">
                        Tips, Stories, and Updates from Our World
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
