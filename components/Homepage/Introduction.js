import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const Introduction = () => {
    return (
        <div className="my-10 lg:px-16 px-4 lg:max-w-7xl w-[90%] mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center flex flex-col items-center leading-[1.5]"
            >
                <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold lg:w-[80%] mx-auto`}>
                    Welcome to GoldenPaws
                </h1>
                <h1 className={`${platypi.className} lg:text-[24px] md:text-[20px] text-[14px] lg:w-[80%] mx-auto text-gray-800`}>
                    Where Every Puppy Finds a Loving Home
                </h1>
            </motion.div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center mt-16">
                <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    src="/assets/introduction.png"
                    alt="GoldenPaws Introduction"
                    className="rounded-lg lg:h-[450px] md:h-[350px] mx-auto md:mx-0"
                />
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6 md:items-start md:text-left items-center text-center"
                >
                    <h2 className={`${platypi.className} lg:text-[28px] text-[24px] font-semibold`}>Who We Are</h2>
                    <p className="text-gray-700 lg:text-[16px] text-[14px]">
                        At GoldenPaws, we specialize in raising healthy, happy puppies. Our dedicated team of experienced breeders and caregivers are committed to providing the best care possible for our puppies. We focus on ensuring that each puppy is well-socialized, healthy, and ready to join their new families.
                    </p>
                    <p className="text-gray-700 lg:text-[16px] text-[14px]">
                        Our state-of-the-art facilities and rigorous health protocols ensure that our puppies grow up in a safe and nurturing environment. We work closely with veterinarians to monitor the health and well-being of each puppy, from birth until they leave for their new homes.
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center justify-items-end mt-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6 md:items-start md:text-left items-center text-center"
                >
                    <h2 className={`${platypi.className} lg:text-[28px] text-[24px] font-semibold`}>What Is Our Mission</h2>
                    <p className="text-gray-700 lg:text-[16px] text-[14px]">
                        Our mission at GoldenPaws is to connect loving families with healthy, well-adjusted puppies. We believe that every puppy deserves a happy home, and we strive to make that happen by maintaining high breeding standards and providing exceptional care for each puppy.
                    </p>
                    <p className="text-gray-700 lg:text-[16px] text-[14px]">
                        We are dedicated to promoting responsible pet ownership and educating our clients on the best practices for raising a puppy. From the moment you express interest in one of our puppies, we are here to support you every step of the way, ensuring a smooth and joyful transition for both you and your new furry friend.
                    </p>
                </motion.div>
                <motion.img
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    src="/assets/gp1.png"
                    alt="GoldenPaws Mission"
                    className="rounded-lg lg:h-[450px] md:h-[350px]"
                />
            </div>
        </div>
    );
};

export default Introduction;
