import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const Testimonials = () => {
    const reviews = [
        {
            name: "Sarah L.",
            review: "GoldenPaws provided us with the most beautiful and healthy puppy. The adoption process was seamless and their support was amazing.",
            image: "/assets/reviewer1.avif"
        },
        {
            name: "John D.",
            review: "Our experience with GoldenPaws was fantastic. The breeders are professional and the health guarantee gave us peace of mind.",
            image: "/assets/reviewer2.avif"
        },
        {
            name: "Emily R.",
            review: "We love our new puppy from GoldenPaws! The staff were friendly and helpful throughout the entire process.",
            image: "/assets/reviewer3.avif"
        }
    ];

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
                    <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold mx-auto`}>
                        What Our Happy Owners Say
                    </h1>
                    <h1 className={`${platypi.className} lg:w-[80%] mx-auto text-gray-800`}>
                        Hear from some of our happy puppy owners about their experiences with GoldenPaws.
                    </h1>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#333] text-[#fdf3e9] p-6 rounded-lg shadow transition duration-200 flex flex-col items-center"
                        >
                            <img src={review.image} alt={review.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
                            <h2 className="text-xl font-semibold mb-2 uppercase tracking-widest">{review.name}</h2>
                            <p className="text-[#fdf3e9] font-light text-[14px] tracking-widest">{review.review}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Testimonials;
