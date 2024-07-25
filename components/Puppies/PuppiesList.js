import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';
import { useRouter } from 'next/navigation';

const PuppiesList = ({ puppies }) => {
    const router = useRouter();

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-8 md:mt-10 my-6 lg:px-16 px-4 lg:max-w-7xl w-[90%] mx-auto'>
            {puppies.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className='flex flex-col items-center rounded-t-[24px] rounded-b-[12px] bg-[#e5c6a7] w-[160px] md:w-[300px] h-[200px] md:h-[350px] shadow-lg md:my-5 my-2 mx-auto cursor-pointer'
                    onClick={() => router.push(`/pets/${item.slug}`)}
                >
                    <div className='h-[75%] overflow-hidden w-full rounded-t-[24px]'>
                        <img src={item.coverImg} alt={item.name} className='rounded-t-[24px] object-cover w-full h-full hover:scale-105 ease-in-out transition-transform duration-300' />
                    </div>
                    <h1 className={`${platypi.className} md:text-[20px] text-center p-5`}>{item.name}</h1>
                </motion.div>
            ))}
        </div>
    );
};

export default PuppiesList;
