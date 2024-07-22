"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Process/Hero";
import StepsToAdopt from "@/components/Process/StepsToAdopt";
import PaymentOptions from "@/components/Process/PaymentOptions";
import ShippingAndDelivery from "@/components/Process/ShippingAndDelivery";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <StepsToAdopt />
            <PaymentOptions />
            <ShippingAndDelivery />
            <Footer />
        </>
    );
}
