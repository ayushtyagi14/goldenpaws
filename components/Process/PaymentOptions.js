import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { platypi } from '@/app/layout';

const PaymentOptions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const paymentMethods = [
        {
            title: "Credit/Debit Card",
            description: "Secure payments through major credit and debit cards. Our payment system ensures your information is protected.",
            icon: "/assets/credit-card-icon.png" // Replace with your own icon path
        },
        {
            title: "Bank Transfer",
            description: "Transfer funds directly to our bank account for a straightforward payment process. Details will be provided upon request.",
            icon: "/assets/bank-transfer-icon.png" // Replace with your own icon path
        },
        {
            title: "UPI",
            description: "Quick and easy payment via UPI. A secure and familiar option for many of our customers.",
            icon: "/assets/upi-icon.png" // Replace with your own icon path
        },
        {
            title: "Installment Plans",
            description: "Flexible financing options to spread the cost over time. Contact us to discuss available plans and terms.",
            icon: "/assets/installment-plan-icon.png" // Replace with your own icon path
        }
    ];

    return (
        <div className="bg-[#e5c6a7] py-16 px-4 lg:px-16 lg:max-w-7xl w-[90%] mx-auto rounded-[24px] shadow-lg">
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
                    <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[24px] font-bold lg:w-[80%] mx-auto`}>
                        Flexible Payment Options
                    </h1>
                    <h1 className={`${platypi.className} lg:w-[80%] mx-auto text-gray-800`}>
                        We offer various payment methods to make your adoption process easy and convenient. Choose the option that works best for you:
                    </h1>
                </motion.div>
                <div className="w-full">
                    {paymentMethods.map((method, index) => (
                        <div key={index} className="mb-4">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="flex justify-between items-center w-full px-5 py-3 bg-white rounded-lg shadow hover:bg-gray-100 transition duration-200"
                            >
                                <div className="flex items-center">
                                    <img src={method.icon} alt={`${method.title} Icon`} className="w-6 h-6 mr-4" />
                                    <h2 className="text-lg font-semibold">{method.title}</h2>
                                </div>
                                <span>{openIndex === index ? '-' : '+'}</span>
                            </button>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    transition={{ duration: 0.1 }}
                                    className="overflow-hidden mt-2 px-5 py-3 bg-gray-50 rounded-lg"
                                >
                                    <p className="text-gray-700 tracking-widest md:text-[15px] text-[14px]">{method.description}</p>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default PaymentOptions;
