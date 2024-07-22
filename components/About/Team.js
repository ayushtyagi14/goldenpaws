import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const teamMembers = [
    { name: 'Jane Doe', role: 'Founder & Head Breeder', imgUrl: '/assets/jane-doe.jpg' },
    { name: 'John Smith', role: 'Veterinarian', imgUrl: '/assets/john-smith.jpg' },
    { name: 'Emily Davis', role: 'Puppy Care Specialist', imgUrl: '/assets/emily-davis.jpg' },
];

const Team = () => {
    return (
        <div className="bg-[#fdf3e9] py-16 px-4 lg:px-16 lg:max-w-7xl w-[90%] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center flex flex-col items-center leading-[1.5]"
            >
                <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold lg:w-[80%] mx-auto`}>
                    Meet the Team
                </h1>
                <h1 className={`${platypi.className} lg:text-[24px] md:text-[20px] text-[14px] lg:w-[80%] mx-auto text-gray-800`}>
                    Dedicated Professionals Caring for Your Future Family Member
                </h1>
            </motion.div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className='h-[400px] overflow-hidden rounded-lg'>
                            <img src={member.imgUrl} alt={member.name} className="w-full rounded-lg mb-4 object-cover h-full hover:scale-105 ease-in-out transition-transform duration-300" />
                        </div>
                        <h2 className={`${platypi.className} text-[24px] font-bold text-[#333]`}>{member.name}</h2>
                        {/* <p className="text-lg text-gray-700">{member.role}</p> */}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Team;
