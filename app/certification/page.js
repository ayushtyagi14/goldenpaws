"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Certification/Hero";
import BreederInformation from "@/components/Certification/BreederInformation";
import HealthGuarantee from "@/components/Certification/HealthGuarantee";
import Testimonials from "@/components/Certification/Testimonials";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <BreederInformation />
            <HealthGuarantee />
            <Testimonials />
            <Footer />
        </>
    );
}
