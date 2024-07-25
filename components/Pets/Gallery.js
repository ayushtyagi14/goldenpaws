import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { platypi } from "@/app/layout";

const Gallery = ({ imgGallery }) => {
    const [width, setWidth] = useState(null);
    let mobile = false;

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => {
            window.removeEventListener("resize", () => setWidth(window.innerWidth));
        };
    }, []);

    if (width < 1000) {
        mobile = true;
    } else {
        mobile = false;
    }

    const slidesToShow = mobile ? 2.5 : 4.5;

    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: slidesToShow, // Use the conditional value
        slidesToScroll: 0.5,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        prevArrow: false,
        nextArrow: false,
    };

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleMediaClick = (media) => {
        setSelectedImage(media);
        setShowModal(true);
    };

    return (
        <>
            <div className=" px-4 lg:px-16 lg:max-w-7xl mx-auto">
                <h1 className={`${platypi.className} lg:text-[54px] md:text-[42px] text-[36px] font-bold text-center`}>
                    Gallery
                </h1>

                <Slider {...settings}>
                    {imgGallery?.gallery?.map((item, index) => (
                        <div key={index} className="px-1.5 mt-10">
                            <img
                                src={item}
                                alt={`Image ${index}`}
                                className="mx-0 rounded-xl cursor-pointer"
                                onClick={() => handleMediaClick(item)}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-[99]"
                    >
                        <img
                            src={selectedImage}
                            alt="Selected Image"
                            className="max-w-full max-h-full"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-[28px] focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            X
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default Gallery;
