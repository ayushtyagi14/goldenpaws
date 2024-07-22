import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const BreederInformation = () => {
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
                        Our Professional Breeders
                    </h1>
                    <h1 className={`${platypi.className} lg:w-[80%] mx-auto text-gray-800`}>
                        Our breeders are highly professional and experienced, ensuring that every puppy is raised with the utmost care. They hold numerous certifications that reflect their commitment to excellence.
                    </h1>
                </motion.div>
                <ul className="list-none space-y-8 w-full">
                    <li className="flex flex-row items-start p-6 rounded-lg shadow-md transition duration-200">
                        <img src="/assets/breeder-certification.png" alt="Breeder Certification" width={48} className='mr-4' />
                        <div className="text-left">
                            <h2 className="text-xl font-bold">Certified Breeders</h2>
                            <p className="text-gray-700 mt-2">
                                All our breeders are certified by recognized organizations, ensuring the highest standards of care.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-start p-6 rounded-lg shadow-md transition duration-200">
                        <img src="/assets/experience-icon.png" alt="Experience" width={48} className='mr-4' />
                        <div className="text-left">
                            <h2 className="text-xl font-bold">Years of Experience</h2>
                            <p className="text-gray-700 mt-2">
                                With years of experience in breeding, our team provides top-notch care for each puppy.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-start p-6 rounded-lg shadow-md transition duration-200">
                        <img src="/assets/award-icon.png" alt="Awards" width={48} className='mr-4' />
                        <div className="text-left">
                            <h2 className="text-xl font-bold">Multiple Awards</h2>
                            <p className="text-gray-700 mt-2">
                                Our breeders have received multiple awards for their dedication and excellence in breeding.
                            </p>
                        </div>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default BreederInformation;
