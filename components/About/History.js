import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const History = () => {
    return (
        <div className="bg-[#fdf3e9] py-16 px-4 lg:px-16 lg:max-w-7xl w-[90%] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center flex flex-col items-center leading-[1.5] mb-10"
            >
                <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold lg:w-[80%] mx-auto`}>
                    Our Journey
                </h1>
                <h1 className={`${platypi.className} lg:text-[24px] md:text-[20px] text-[14px] lg:w-[80%] mx-auto text-gray-800`}>
                    Passionate Breeding with Decades of Experience
                </h1>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center lg:gap-16 gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 w-full text-lg text-gray-700 leading-relaxed"
                >
                    <p className=' lg:text-[16px] text-[14px] tracking-widest'>
                        GoldenPaws started with a mission to provide loving families with healthy, happy puppies. Our founder, Jane Doe, has been passionate about dog breeding since childhood, and this passion shines through in every puppy we raise.
                    </p>
                    <p className="mt-6 lg:text-[16px] text-[14px] tracking-widest">
                        Our journey began over a decade ago, in a small town with a big dream. With a commitment to excellence and a love for animals, we have grown into a trusted name in puppy breeding. Every step of our journey has been guided by our core values of love, care, and quality.
                    </p>
                    <p className="mt-6 lg:text-[16px] text-[14px] tracking-widest">
                        At GoldenPaws, we believe in ethical breeding practices and prioritize the health and well-being of our puppies. We work closely with veterinarians and follow strict standards to ensure that every puppy is healthy, happy, and ready to join a loving home.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 w-full flex justify-center"
                >
                    {/* Add an illustration or image of a happy family with a puppy */}
                    <img src="/assets/happy-family.jpg" alt="Happy Family with Puppy" className="rounded-lg shadow-lg" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-10 flex flex-col lg:flex-row items-center lg:gap-16 gap-10"
            >
                <div className="lg:w-1/2 w-full flex justify-center">
                    {/* Add an illustration or image of Jane Doe with puppies */}
                    <img src="/assets/jane-doe.jpg" alt="Founder Jane Doe with Puppies" className="rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-1/2 w-full text-lg text-gray-700 leading-relaxed">
                    <p className=' lg:text-[16px] text-[14px] tracking-widest'>
                        Jane Doe&apos;s love for dogs is evident in every aspect of GoldenPaws. From carefully selecting breeding pairs to providing top-notch care for our puppies, Jane ensures that GoldenPaws maintains its reputation for quality and integrity.
                    </p>
                    <p className="mt-6 lg:text-[16px] text-[14px] tracking-widest">
                        We are proud of our journey and excited for the future. Our commitment to our puppies and their new families drives us to continually improve and uphold the highest standards in breeding.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default History;
