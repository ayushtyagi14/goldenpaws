import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const StepsToAdopt = () => {
    return (
        <div className="bg-[#fdf3e9] py-16 px-4 lg:px-16 lg:max-w-7xl w-[90%] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center flex flex-col items-center leading-[1.5]"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center flex flex-col items-center leading-[1.5] mb-10"
                >
                    <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold lg:w-[80%] mx-auto`}>
                        Steps to Adopt
                    </h1>
                    <h1 className={`${platypi.className} lg:w-[80%] mx-auto text-gray-800`}>
                        Bringing a new puppy into your home is an exciting journey. Follow these simple steps to make the adoption process smooth and joyful:
                    </h1>
                </motion.div>
                <ul className="list-none space-y-8">
                    <li className="flex flex-row items-start">
                        <img src="/assets/paw.png" alt="Paw" width={28} className='mr-2' />
                        <div className="text-left">
                            <h2 className="text-xl font-bold">Explore Our Available Puppies</h2>
                            <p className="text-gray-700 mt-2">
                                Browse our selection of puppies to find your perfect match. Each puppy has detailed information to help you make an informed decision.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-start">
                        <img src="/assets/paw.png" alt="Paw" width={28} className='mr-2' />
                        <div className="text-left">
                            <h2 className="text-xl font-bold">Complete the Adoption Application</h2>
                            <p className="text-gray-700 mt-2">
                                Fill out our online adoption form with your contact details and preferences. This helps us understand what you&apos;re looking for in a puppy.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-start">
                        <img src="/assets/paw.png" alt="Paw" width={28} className='mr-2' />
                        <div className="text-left">
                            <h2 className="text-xl font-bold">Schedule a Meet and Greet</h2>
                            <p className="text-gray-700 mt-2">
                                Arrange a visit to meet your chosen puppy in person. This is a great opportunity to ensure the puppy is a good fit for your family.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-start">
                        <img src="/assets/paw.png" alt="Paw" width={28} className='mr-2' />
                        <div className="text-left">
                            <h2 className="text-xl font-bold">Finalize the Adoption</h2>
                            <p className="text-gray-700 mt-2">
                                Once you&apos;ve decided, complete the adoption paperwork. We&apos;ll provide you with all the information you need to prepare for your new puppy.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-start">
                        <img src="/assets/paw.png" alt="Paw" width={28} className='mr-2' />
                        <div className="text-left">
                            <h2 className="text-xl font-bold">Bring Your Puppy Home</h2>
                            <p className="text-gray-700 mt-2">
                                Get ready to welcome your new furry friend into your home! We provide support and guidance throughout the transition to ensure a smooth start.
                            </p>
                        </div>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default StepsToAdopt;
