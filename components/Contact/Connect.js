import { platypi } from '@/app/layout'
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'

const Connect = () => {
    return (
        <div className='pt-28 py-16 px-4 lg:px-16 lg:max-w-7xl w-[90%] mx-auto'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-12 items-center justify-items-center'>
                <div>
                    <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold`}>
                        Contact Us
                    </h1>
                    <p className='uppercase tracking-widest mt-10'>
                        Connect with GoldenPaws to discover your ideal puppy and become part of our loving community. We&apos;re here to provide exceptional care, support, and joy throughout your pet&apos;s journey with you.
                    </p>
                    <div className='flex flex-row w-full items-center justify-between mt-10'>
                        <div className='flex flex-col items-start'>
                            <h1 className='font-bold'>Email</h1>
                            <p>info@goldenpaws.com</p>
                        </div>
                        <div className='flex flex-col items-start'>
                            <h1 className='font-bold'>Phone</h1>
                            <p>+91 9911828286</p>
                        </div>
                    </div>
                    <div className='flex flex-row w-full items-center justify-between mt-10'>
                        <div className='flex flex-col items-start'>
                            <h1 className='font-bold'>Social Links</h1>
                            <div className='flex flex-row items-center gap-6 mt-4'>
                                <Link href={'/'}>
                                    <motion.img whileHover={{ scale: 1.2 }} src="/assets/instagram-black.png" alt="instagram" width={36} />
                                </Link>
                                <Link href={'/'}>
                                    <motion.img whileHover={{ scale: 1.2 }} src="/assets/facebook-black.png" alt="facebook" width={36} />
                                </Link>
                                <Link href={'/'}>
                                    <motion.img whileHover={{ scale: 1.2 }} src="/assets/youtube-black.png" alt="youtube" width={36} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/connect.webp" alt="Connect GoldenPaws" className='h-[550px] rounded-[24px] w-full object-cover' />
            </div>
        </div>
    )
}

export default Connect