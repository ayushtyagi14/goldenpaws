"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/Pets/Hero";
import Gallery from "@/components/Pets/Gallery";
import { motion } from "framer-motion";

import FAQs from "@/components/Pets/FAQs";
import HealthTips from "@/components/Pets/HealthTips";
import TrainingTips from "@/components/Pets/TrainingTips";
import CareRequirements from "@/components/Pets/CareRequirements";
import { platypi } from "@/app/layout";

export default function Page({ params }) {
    const [puppy, setPuppy] = useState([]);

    const router = useRouter();

    const getSinglePuppy = async () => {
        try {
            var myHeaders = new Headers();

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            const response = await fetch(`https://goldenpaws-backend.onrender.com/api/pets/details/${params.slug}`, requestOptions);

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                setPuppy(result);
            }

        } catch (error) {
            console.log(error, "Error getting puppies data");
        }
    }

    useEffect(() => {
        getSinglePuppy();
    }, [])

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Navbar />
            <Hero heroData={puppy} />
            <Gallery imgGallery={puppy} />
            <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[36px] font-bold text-center mb-10`}>
                Everything You Need to Know
            </h1>
            <div className="mb-4 px-4 lg:px-16 lg:max-w-7xl mx-auto">
                <button
                    onClick={() => toggleAccordion(0)}
                    className="flex justify-between items-center w-full px-5 py-3 bg-[#333] text-white rounded-lg shadow hover:bg-[#333333cd] transition duration-200"
                >
                    <div className="flex items-center">
                        <h2 className="text-lg font-semibold">Fun Facts</h2>
                    </div>
                    <span>{openIndex === 0 ? '-' : '+'}</span>
                </button>
                {openIndex === 0 && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        transition={{ duration: 0.1 }}
                        className="overflow-hidden mt-2 px-5 py-3 bg-[#3a3a3a] text-white rounded-lg"
                    >
                        <FAQs factsData={puppy} />
                    </motion.div>
                )}
            </div>
            <div className="mb-4 px-4 lg:px-16 lg:max-w-7xl mx-auto">
                <button
                    onClick={() => toggleAccordion(1)}
                    className="flex justify-between items-center w-full px-5 py-3 bg-[#333] text-white rounded-lg shadow hover:bg-[#333333cd] transition duration-200"
                >
                    <div className="flex items-center">
                        <h2 className="text-lg font-semibold">Health Tips</h2>
                    </div>
                    <span>{openIndex === 1 ? '-' : '+'}</span>
                </button>
                {openIndex === 1 && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        transition={{ duration: 0.1 }}
                        className="overflow-hidden mt-2 px-5 py-3 bg-[#3a3a3a] text-white rounded-lg"
                    >
                        <HealthTips data={puppy} />
                    </motion.div>
                )}
            </div>
            <div className="mb-4 px-4 lg:px-16 lg:max-w-7xl mx-auto">
                <button
                    onClick={() => toggleAccordion(2)}
                    className="flex justify-between items-center w-full px-5 py-3 bg-[#333] text-white rounded-lg shadow hover:bg-[#333333cd] transition duration-200"
                >
                    <div className="flex items-center">
                        <h2 className="text-lg font-semibold">Training Tips</h2>
                    </div>
                    <span>{openIndex === 2 ? '-' : '+'}</span>
                </button>
                {openIndex === 2 && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        transition={{ duration: 0.1 }}
                        className="overflow-hidden mt-2 px-5 py-3 bg-[#3a3a3a] text-white rounded-lg"
                    >
                        <TrainingTips data={puppy} />
                    </motion.div>
                )}
            </div>
            <div className="mb-16 px-4 lg:px-16 lg:max-w-7xl mx-auto">
                <button
                    onClick={() => toggleAccordion(3)}
                    className="flex justify-between items-center w-full px-5 py-3 bg-[#333] text-white rounded-lg shadow hover:bg-[#333333cd] transition duration-200"
                >
                    <div className="flex items-center">
                        <h2 className="text-lg font-semibold">Care Requirements</h2>
                    </div>
                    <span>{openIndex === 3 ? '-' : '+'}</span>
                </button>
                {openIndex === 3 && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        transition={{ duration: 0.1 }}
                        className="overflow-hidden mt-2 px-5 py-3 bg-[#3a3a3a] text-white rounded-lg"
                    >
                        <CareRequirements data={puppy} />
                    </motion.div>
                )}
            </div>
            <Footer />
        </>
    );
}
