import { platypi } from '@/app/layout';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <>
            <div className='bg-[#333333] text-[#fdf3e9]'>
                <div className="md:py-16 py-8 lg:px-16 px-4 lg:max-w-7xl w-[90%] mx-auto overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='flex flex-col gap-5 lg:gap-0 lg:flex-row items-center w-full justify-between border-b border-[#fdf3e9] lg:pb-10 pb-4'
                    >
                        <Link href="/">
                            <h1 className={`${platypi.className} lg:text-[30px] text-[20px] flex flex-row items-center gap-2`}>
                                GoldenPaws <img src="/assets/paw.png" alt="paw" className='w-[26px] lg:w-[48px]' />
                            </h1>
                        </Link>
                        <p className={`${platypi.className} lg:text-[30px] text-[20px]`}>
                            Bringing Joy, One Paw at a Time.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between mt-10'
                    >
                        <div className='grid md:grid-cols-4 grid-cols-2 text-[14px] uppercase tracking-widest'>
                            <Link href="/">
                                <motion.h1 whileHover={{ scale: 1.1 }}>Home</motion.h1>
                            </Link>
                            <Link href="/about">
                                <motion.h1 whileHover={{ scale: 1.1 }}>About Us</motion.h1>
                            </Link>
                            <Link href="/puppies">
                                <motion.h1 whileHover={{ scale: 1.1 }}>Puppies</motion.h1>
                            </Link>
                            <Link href="/certification">
                                <motion.h1 whileHover={{ scale: 1.1 }}>Certification</motion.h1>
                            </Link>
                            <Link href="/process">
                                <motion.h1 whileHover={{ scale: 1.1 }}>Process</motion.h1>
                            </Link>
                            <Link href="/blogs">
                                <motion.h1 whileHover={{ scale: 1.1 }}>Blogs</motion.h1>
                            </Link>
                            <Link href="/contact">
                                <motion.h1 whileHover={{ scale: 1.1 }}>Contact Us</motion.h1>
                            {/* <Link href="/breeds">
                                <motion.h1 whileHover={{ scale: 1.1 }}>Breeds</motion.h1>
                            </Link> */}
                            </Link>
                        </div>
                        <div className='flex flex-row items-center gap-6'>
                            <Link href={'/'}>
                                <motion.img whileHover={{ scale: 1.2 }} src="/assets/instagram.png" alt="instagram" />
                            </Link>
                            <Link href={'/'}>
                                <motion.img whileHover={{ scale: 1.2 }} src="/assets/facebook.png" alt="facebook" />
                            </Link>
                            <Link href={'/'}>
                                <motion.img whileHover={{ scale: 1.2 }} src="/assets/youtube.png" alt="youtube" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="py-8 lg:px-16 px-4 lg:max-w-7xl w-[90%] mx-auto overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between w-full'
                >
                    <h1>© GoldenPaws 2024</h1>
                    <div className='grid md:grid-cols-3 grid-cols-1 text-[14px] uppercase tracking-widest justify-items-center'>
                        <Link href="/">
                            <motion.h1 whileHover={{ scale: 1.1 }}>Privacy Policy</motion.h1>
                        </Link>
                        <Link href="/">
                            <motion.h1 whileHover={{ scale: 1.1 }}>Terms and Conditions</motion.h1>
                        </Link>
                        <Link href="/">
                            <motion.h1 whileHover={{ scale: 1.1 }}>Return Policy</motion.h1>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Footer;
