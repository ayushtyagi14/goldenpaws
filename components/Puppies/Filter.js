import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const Filter = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="my-8 text-center">
            <button
                onClick={togglePopup}
                className="bg-[#333333] text-[#fdf3e9] px-6 py-2 rounded-lg uppercase font-medium tracking-widest"
            >
                Filter Puppies
            </button>
            {showPopup && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                >
                    <div className="bg-[#333333] p-8 rounded-[16px] puppy-filter shadow-lg md:w-[60%] w-[95%] m-auto min-h-max max-h-[80%] relative">
                        <button
                            onClick={togglePopup}
                            className="absolute top-2 right-2 text-[#fdf3e9]"
                        >
                            &#10005;
                        </button>
                        <h2 className={`${platypi.className} text-[#fdf3e9] text-2xl font-bold mb-4`}>
                            Tailored to Your Needs
                        </h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 uppercase tracking-widest text-[#fdf3e9]">
                            {/* Size Filter */}
                            <div>
                                <label className="block text-lg">Size</label>
                                <select className="w-full px-4 py-2 border rounded-lg mt-2 uppercase tracking-widest text-[14px] bg-[#333333] text-[#fdf3e9]">
                                    <option value="">Select Size</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </div>

                            {/* Gender Filter */}
                            {/* <div>
                                <label className="block text-lg">Gender</label>
                                <select className="w-full px-4 py-2 border rounded-lg mt-2 uppercase tracking-widest text-[14px] bg-[#333333] text-[#fdf3e9]">
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div> */}

                            {/* Age Filter */}
                            {/* <div>
                                <label className="block text-lg">Age</label>
                                <select className="w-full px-4 py-2 border rounded-lg mt-2 uppercase tracking-widest text-[14px] bg-[#333333] text-[#fdf3e9]">
                                    <option value="">Select Age</option>
                                    <option value="puppy">Puppy</option>
                                    <option value="adult">Adult</option>
                                    <option value="senior">Senior</option>
                                </select>
                            </div> */}

                            {/* Type of Dog Filter */}
                            <div>
                                <label className="block text-lg">Type of Dog</label>
                                <select className="w-full px-4 py-2 border rounded-lg mt-2 uppercase tracking-widest text-[14px] bg-[#333333] text-[#fdf3e9]">
                                    <option value="">Select Type</option>
                                    <option value="working">Working</option>
                                    <option value="sporting">Sporting</option>
                                    <option value="herding">Herding</option>
                                    <option value="terrier">Terrier</option>
                                    <option value="toy">Toy</option>
                                </select>
                            </div>

                            {/* Breed Filter */}
                            {/* <div>
                                <label className="block text-lg">Breed</label>
                                <select className="w-full px-4 py-2 border rounded-lg mt-2 uppercase tracking-widest text-[14px] bg-[#333333] text-[#fdf3e9]">
                                    <option value="">Select Breed</option>
                                    <option value="retriever">Golden Retriever</option>
                                    <option value="bulldog">French Bulldog</option>
                                    <option value="poodle">Poodle</option>
                                    <option value="beagle">Beagle</option>
                                    <option value="husky">Siberian Husky</option>
                                </select>
                            </div> */}
                        </div>
                        <button
                            onClick={togglePopup}
                            className="mt-8 text-[#333333] bg-[#fdf3e9] md:px-8 px-16 py-2 rounded-[8px] uppercase font-medium tracking-widest"
                        >
                            Apply Filters
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Filter;
