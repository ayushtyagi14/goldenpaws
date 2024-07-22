import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const Breeding = () => {
    return (
        <div className="bg-[#e5c6a7] py-16 px-4 lg:px-16 lg:max-w-7xl w-[90%] mx-auto rounded-[24px]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center flex flex-col items-center leading-[1.5] mb-10"
            >
                <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold lg:w-[80%] mx-auto`}>
                    Commitment to Excellence
                </h1>
                <h1 className={`${platypi.className} lg:text-[24px] md:text-[20px] text-[14px] lg:w-[80%] mx-auto text-gray-800`}>
                    Our Breeding Standards for Healthy, Happy Puppies
                </h1>
            </motion.div>
            <div className="flex flex-col lg:flex-row items-center lg:gap-16 gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 w-full text-lg text-gray-700 leading-relaxed"
                >
                    <p>
                        At GoldenPaws, we are dedicated to maintaining the highest standards of health and welfare for our puppies. Our breeding practices are rooted in love, care, and a deep understanding of canine genetics.
                    </p>
                    <ul className="space-y-4 mt-6">
                        <li className="flex flex-row items-start">
                            <img src="/assets/paw.png" alt="Paw" width={28} className='mr-2 mt-3' />
                            <p className="text-gray-700 mt-2">
                                We adhere to the highest standards of health and welfare for our puppies.
                            </p>
                        </li>
                        <li className="flex flex-row items-start">
                            <img src="/assets/paw.png" alt="Paw" width={28} className='mr-2 mt-3' />
                            <p className="text-gray-700 mt-2">
                                Our breeding practices prioritize genetic health and diversity.
                            </p>
                        </li>
                        <li className="flex flex-row items-start">
                            <img src="/assets/paw.png" alt="Paw" width={28} className='mr-2 mt-3' />
                            <p className="text-gray-700 mt-2">
                                All puppies receive regular veterinary check-ups and vaccinations.
                            </p>
                        </li>
                        <li className="flex flex-row items-start">
                            <img src="/assets/paw.png" alt="Paw" width={28} className='mr-2 mt-3' />
                            <p className="text-gray-700 mt-2">
                                We provide a nurturing environment to ensure the well-being of our puppies.
                            </p>
                        </li>
                        <li className="flex flex-row items-start">
                            <img src="/assets/paw.png" alt="Paw" width={28} className='mr-2 mt-3' />
                            <p className="text-gray-700 mt-2">
                                Our team includes experienced breeders and veterinarians committed to excellence.
                            </p>
                        </li>
                        <li className="flex flex-row items-start">
                            <img src="/assets/paw.png" alt="Paw" width={28} className='mr-2 mt-3' />
                            <p className="text-gray-700 mt-2">
                                We follow ethical breeding practices to produce healthy, happy puppies.
                            </p>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 w-full md:h-[600px] flex justify-center"
                >
                    <img src="/assets/puppies-playing.avif" alt="Puppies Playing" className="rounded-lg shadow-lg object-cover" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-16 flex flex-col lg:flex-row items-center lg:gap-16 gap-10"
            >
                <div className="lg:w-1/2 w-full md:h-[320px] flex justify-center">
                    {/* Add an illustration or image of a veterinarian checking a puppy */}
                    <img src="/assets/vet-checking-puppy.jpg" alt="Veterinarian Checking Puppy" className="rounded-lg shadow-lg object-cover w-full" />
                </div>
                <div className="lg:w-1/2 w-full text-lg text-gray-700 leading-relaxed">
                    <p>
                        Our commitment to excellence doesn&apos;t end with the puppies. We also ensure that our breeding dogs are well cared for and loved. Each dog undergoes regular health screenings and lives in a comfortable, loving environment.
                    </p>
                    <p className="mt-6">
                        We believe that a happy, healthy environment is crucial for the development of our puppies. Our facilities are designed to provide ample space for play and socialization, helping our puppies grow into well-adjusted, happy dogs.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Breeding;
