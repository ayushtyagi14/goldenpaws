import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const ShippingAndDelivery = () => {
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
                    <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold lg:w-[95%] mx-auto`}>
                        From Our Home to Yours
                    </h1>
                    <h1 className={`${platypi.className} lg:w-[80%] mx-auto text-gray-800`}>
                        We ensure a safe and reliable delivery process for your new puppy. Here&apos;s what you can expect:
                    </h1>
                </motion.div>
                <ul className="list-none space-y-8 w-full">
                    <li className="flex flex-row items-start bg-[#333333] text-[#fdf3e9] p-6 rounded-lg shadow transition duration-200">
                        <div className="text-left">
                            <h2 className="text-xl font-medium uppercase tracking-widest">Safe Transportation</h2>
                            <p className="mt-2 font-light">
                                Our puppies are transported in comfortable, secure carriers to ensure their safety and well-being during transit.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-start bg-[#333333] text-[#fdf3e9] p-6 rounded-lg shadow transition duration-200">
                        <div className="text-left">
                            <h2 className="text-xl font-medium uppercase tracking-widest">Final Health Check</h2>
                            <p className="mt-2 font-light">
                                Each puppy undergoes a thorough health check before delivery to confirm they are in excellent condition.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-start bg-[#333333] text-[#fdf3e9] p-6 rounded-lg shadow transition duration-200">
                        <div className="text-left">
                            <h2 className="text-xl font-medium uppercase tracking-widest">Delivery Options</h2>
                            <p className="mt-2 font-light">
                                Choose from home delivery or pick-up from our facility. We offer flexible options to suit your preferences.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-start bg-[#333333] text-[#fdf3e9] p-6 rounded-lg shadow transition duration-200">
                        <div className="text-left">
                            <h2 className="text-xl font-medium uppercase tracking-widest">Support and Guidance</h2>
                            <p className="mt-2 font-light">
                                Our team will provide you with all necessary information and support throughout the delivery process to ensure a smooth transition for your new puppy.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-start bg-[#333333] text-[#fdf3e9] p-6 rounded-lg shadow transition duration-200">
                        <div className="text-left">
                            <h2 className="text-xl font-medium uppercase tracking-widest">Costs</h2>
                            <p className="mt-2 font-light">
                                Delivery costs vary based on location and method. We&apos;ll provide a clear breakdown of any associated fees.
                            </p>
                        </div>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default ShippingAndDelivery;
