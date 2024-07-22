import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const Featured = () => {
    const puppies = [
        {
            name: 'Teacup Pomeranian',
            imgUrl: '/assets/teacup.jpeg'
        },
        {
            name: 'Chow Chow',
            imgUrl: '/assets/chowchow.jpeg'
        },
        {
            name: 'French Bulldog',
            imgUrl: '/assets/french-bulldog.jpeg'
        },
        {
            name: 'Poodle',
            imgUrl: '/assets/poodle.jpeg'
        },
        {
            name: 'Maltese',
            imgUrl: '/assets/maltese.jpeg'
        },
        {
            name: 'Siberian Husky',
            imgUrl: '/assets/siberian-husky.jpeg'
        },
        {
            name: 'Beagle',
            imgUrl: '/assets/beagle.jpeg'
        },
        {
            name: 'Shih Tzu',
            imgUrl: '/assets/shih-tzu.jpeg'
        },
        {
            name: 'Golden Retriever',
            imgUrl: '/assets/retriever.jpeg'
        },
    ];

    return (
        <div className="my-16 lg:px-16 px-4 lg:max-w-7xl w-[90%] mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center flex flex-col items-center leading-[1.5]"
            >
                <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold lg:w-[80%] mx-auto`}>
                    Meet Our Stars
                </h1>
                <h1 className={`${platypi.className} lg:text-[24px] md:text-[20px] text-[14px] lg:w-[80%] mx-auto text-gray-800`}>
                    Adorable Puppies Awaiting Their Forever Families
                </h1>
            </motion.div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-8 md:mt-10 mt-6 mx-auto'>
                {puppies.slice(0, 8).map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className='flex flex-col items-center rounded-t-[24px] rounded-b-[12px] bg-[#e5c6a7] w-[160px] md:w-[300px] h-[200px] md:h-[350px] shadow-lg md:my-5 my-2 mx-auto cursor-pointer'
                    >
                        <div className='h-[75%] overflow-hidden w-full rounded-t-[24px]'>
                            <img src={item.imgUrl} alt={item.name} className='rounded-t-[24px] object-cover w-full h-full hover:scale-105 ease-in-out transition-transform duration-300' />
                        </div>
                        <h1 className={`${platypi.className} md:text-[20px] text-center p-5`}>{item.name}</h1>
                    </motion.div>
                ))}
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className='hidden lg:flex flex-col items-center rounded-t-[24px] rounded-b-[12px] bg-[#e5c6a7] w-[160px] md:w-[300px] h-[200px] md:h-[350px] shadow-lg md:my-5 my-2 mx-auto cursor-pointer'
                >
                    <div className='h-[75%] overflow-hidden w-full rounded-t-[24px]'>
                        <img src={puppies[8].imgUrl} alt={puppies[8].name} className='rounded-t-[24px] object-cover w-full h-full hover:scale-105 ease-in-out transition-transform duration-300' />
                    </div>
                    <h1 className={`${platypi.className} md:text-[20px] text-center p-5`}>{puppies[8].name}</h1>
                </motion.div>
            </div>

            <div className='w-full flex justify-center mt-6'>
                <button className='text-center bg-[#333333] hover:bg-[#333333e8] text-[#fdf3e9] md:px-8 px-16 py-2 rounded-[8px] uppercase font-medium tracking-widest'>
                    View All
                </button>
            </div>
        </div>
    );
};

export default Featured;
