import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { platypi } from '@/app/layout';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full z-50">
            <div className="bg-[#ffe9d6e7] shadow-lg lg:w-[88%] w-[90%] mt-4 rounded-full mx-auto px-8">
                <div className="flex flex-row justify-between items-center w-full h-16">
                    <div className="hidden lg:flex items-center space-x-4 text-[14px] uppercase tracking-widest">
                        <Link href="/">
                            <h1 className="text-gray-700">Home</h1>
                        </Link>
                        <Link href="/about">
                            <h1 className="text-gray-700">About Us</h1>
                        </Link>
                        <Link href="/puppies">
                            <h1 className="text-gray-700">Puppies</h1>
                        </Link>
                        {/* <Link href="/breeds">
                            <h1 className="text-gray-700">Breeds</h1>
                        </Link> */}
                        <Link href="/process">
                            <h1 className="text-gray-700">Process</h1>
                        </Link>
                    </div>
                    <Link href="/">
                        <h1 className={`${platypi.className} lg:text-[30px] text-[20px] flex flex-row items-center gap-2`}>
                            GoldenPaws <img src="/assets/paw.png" alt="paw" className='w-[26px] lg:w-[48px]' />
                        </h1>
                    </Link>
                    <div className="hidden lg:flex items-center space-x-4 text-[14px] uppercase tracking-widest">
                        <Link href="/certification">
                            <h1 className="text-gray-700">Certification</h1>
                        </Link>
                        <Link href="/blogs">
                            <h1 className="text-gray-700">Blogs</h1>
                        </Link>
                        <Link href="/contact">
                            <h1 className="text-gray-700">Contact Us</h1>
                        </Link>
                    </div>
                    <div className="lg:hidden block">
                        <input
                            hidden
                            className="check-icon"
                            id="check-icon"
                            name="check-icon"
                            type="checkbox"
                            onClick={() => setIsOpen(!isOpen)}
                        />
                        <label className="icon-menu" htmlFor="check-icon">
                            <div className="bar bar--1"></div>
                            <div className="bar bar--2"></div>
                            <div className="bar bar--3"></div>
                        </label>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                className="lg:hidden overflow-hidden"
            >
                <div className="flex flex-col items-center space-y-4 py-4 bg-[#fdf3e9e3] w-[90%] mx-auto my-2 rounded-[50px] shadow-lg uppercase tracking-widest">
                    <Link href="/">
                        <h1 onClick={toggleMenu} className="text-gray-700">Home</h1>
                    </Link>
                    <Link href="/about">
                        <h1 onClick={toggleMenu} className="text-gray-700">About Us</h1>
                    </Link>
                    <Link href="/puppies">
                        <h1 onClick={toggleMenu} className="text-gray-700">Puppies</h1>
                    </Link>
                    {/* <Link href="/breeds">
                        <h1 onClick={toggleMenu} className="text-gray-700">Breeds</h1>
                    </Link> */}
                    <Link href="/process">
                        <h1 onClick={toggleMenu} className="text-gray-700">Process</h1>
                    </Link>
                    <Link href="/certification">
                        <h1 onClick={toggleMenu} className="text-gray-700">Certification</h1>
                    </Link>
                    <Link href="/blogs">
                        <h1 onClick={toggleMenu} className="text-gray-700">Blogs</h1>
                    </Link>
                    <Link href="/contact">
                        <h1 onClick={toggleMenu} className="text-gray-700">Contact Us</h1>
                    </Link>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
