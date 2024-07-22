import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const Contact = () => {
    return (
        <div className='bg-[#e5c6a7]'>
            <div className="mt-16 lg:px-16 px-4 lg:max-w-7xl w-[90%] mx-auto overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center flex flex-col items-center leading-[1.5] mt-6"
                >
                    <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold lg:w-[80%] mx-auto`}>
                        Connect with Us
                    </h1>
                    <h1 className={`${platypi.className} lg:text-[24px] md:text-[20px] text-[14px] lg:w-[80%] mx-auto text-gray-800`}>
                        We&apos;re Here to Help You Find Your Perfect Puppy
                    </h1>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center md:gap-20 gap-10 md:w-[80%] w-[98%] mx-auto mt-16"
                >
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-16 gap-10 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center w-[100%]"
                        >
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="What is your name *"
                                className="border-b-2 border-[#333333] rounded-b-md focus:outline-none h-[50px] w-full bg-[#e5c6a7] uppercase tracking-widest placeholder:text-[#636363] placeholder:text-[14px]"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center w-[100%]"
                        >
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your email address *"
                                className="border-b-2 border-[#333333] rounded-b-md focus:outline-none h-[50px] w-full bg-[#e5c6a7] uppercase tracking-widest placeholder:text-[#636363] placeholder:text-[14px]"
                            />
                        </motion.div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-16 gap-10 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center w-[100%]"
                        >
                            <input
                                id="phone"
                                type="number"
                                name="phone"
                                placeholder="Your phone number *"
                                onWheel={(e) => e.target.blur()}
                                className="border-b-2 border-[#333333] rounded-b-md focus:outline-none h-[50px] w-full bg-[#e5c6a7] uppercase tracking-widest placeholder:text-[#636363] placeholder:text-[14px]"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center w-[100%]"
                        >
                            <input
                                id="type"
                                type="text"
                                name="type"
                                placeholder="Which breed are you looking for *"
                                className="border-b-2 border-[#333333] rounded-b-md focus:outline-none h-[50px] w-full bg-[#e5c6a7] uppercase tracking-widest placeholder:text-[#636363] placeholder:text-[14px]"
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center w-full"
                    >
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Any message for us"
                            className="w-full h-[80px] focus:outline-none border-b-2 border-[#333333] rounded-b-md bg-[#e5c6a7] uppercase tracking-widest placeholder:text-[#636363] placeholder:text-[14px]"
                        />
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        type="submit"
                        className='text-center bg-[#333333] hover:bg-[#333333e8] text-[#fdf3e9] md:px-8 px-16 py-2 rounded-[8px] uppercase font-medium tracking-widest mb-10'
                    >
                        Submit
                    </motion.button>
                </motion.form>
            </div>
        </div>
    )
}

export default Contact
