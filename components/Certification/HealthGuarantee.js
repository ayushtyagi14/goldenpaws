import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const HealthGuarantee = () => {
    return (
        <div className="bg-[#e5c6a7] py-16 px-4 lg:px-16 lg:max-w-7xl w-[90%] mx-auto rounded-[24px] shadow-lg">
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
                        Health Guarantee
                    </h1>
                    <h1 className={`${platypi.className} lg:w-[80%] mx-auto text-gray-800`}>
                        We take the health of our puppies very seriously. Our health guarantee ensures that your new family member is in perfect health when they come home to you.
                    </h1>
                </motion.div>
                <ul className="list-none space-y-8 w-full">
                    <li className="flex flex-row items-start bg-white p-6 rounded-lg shadow hover:bg-gray-100 transition duration-200">
                        <img src="/assets/health-check-icon.png" alt="Health Checks" width={48} className='mr-4' />
                        <div className="text-left">
                            <h2 className="text-xl font-bold">Thorough Health Checks</h2>
                            <p className="text-gray-700 mt-2">
                                Each puppy undergoes multiple health checks by certified veterinarians before being placed in a new home.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-start bg-white p-6 rounded-lg shadow hover:bg-gray-100 transition duration-200">
                        <img src="/assets/vaccination-icon.png" alt="Vaccinations" width={48} className='mr-4' />
                        <div className="text-left">
                            <h2 className="text-xl font-bold">Up-to-Date Vaccinations</h2>
                            <p className="text-gray-700 mt-2">
                                Our puppies are up-to-date on all vaccinations to ensure they start life healthy and strong.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-start bg-white p-6 rounded-lg shadow hover:bg-gray-100 transition duration-200">
                        <img src="/assets/guarantee-icon.png" alt="Health Guarantee" width={48} className='mr-4' />
                        <div className="text-left">
                            <h2 className="text-xl font-bold">Health Guarantee</h2>
                            <p className="text-gray-700 mt-2">
                                We provide a comprehensive health guarantee for all our puppies, giving you peace of mind.
                            </p>
                        </div>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default HealthGuarantee;
