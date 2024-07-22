import React from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const blogs = [
    {
        image: '/assets/blog1.jpg',
        title: 'The Joy of Bringing Home a New Puppy',
        content: 'Bringing home a new puppy is a thrilling and joyful experience. Learn how to make the transition smooth for you and your furry friend. Discover tips, advice, and more in this comprehensive guide...',
        link: '/blog/the-joy-of-bringing-home-a-new-puppy',
        date: '18/07/2024'
    },
    {
        image: '/assets/blog2.jpg',
        title: 'Top 10 Training Tips for Your New Puppy',
        content: 'Training your new puppy can be a fun and rewarding experience. From basic commands to advanced tricks, explore our top 10 training tips to help your puppy become well-behaved and happy...',
        link: '/blog/top-10-training-tips-for-your-new-puppy',
        date: '12/07/2024'
    },
    {
        image: '/assets/blog3.jpg',
        title: 'Health and Wellness for Puppies',
        content: 'Ensuring the health and wellness of your puppy is crucial for their growth and happiness. Learn about the best practices, nutrition, and healthcare tips to keep your puppy thriving...',
        link: '/blog/health-and-wellness-for-puppies',
        date: '26/06/2024'
    }
];

const BlogCards = () => {
    return (
        <div className="bg-[#fdf3e9] py-16 px-4 lg:px-16 lg:max-w-7xl w-[90%] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center flex flex-col items-center leading-[1.5] mb-10"
                >
                    <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold`}>
                        Latest Blogs
                    </h1>
                    <h1 className={`${platypi.className} lg:w-[80%] mx-auto text-gray-800`}>
                        Stay updated with the latest news and stories
                    </h1>
                </motion.div>
                <div className="space-y-8 w-full">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col lg:flex-row bg-[#e5c6a7] p-6 rounded-lg shadow hover:bg-[#e5c6a7c6] transition duration-200 cursor-pointer"
                        >
                            <img src={blog.image} alt={blog.title} className="w-full lg:w-1/3 rounded-lg mb-4 lg:mb-0 lg:mr-6" />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold uppercase tracking-widest mb-2">{blog.title}</h2>
                                    <p className="text-gray-700 mb-4 tracking-wider">{blog.content}</p>
                                </div>
                                <div className='flex flex-row items-center w-full justify-between'>
                                    <a href={blog.link} className="text-[#333] transition duration-200">Read More</a>
                                    <h1 className={`${platypi.className} text-[14px] tracking-widest`}>{blog.date}</h1>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default BlogCards;
