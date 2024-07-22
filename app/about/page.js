"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import History from "@/components/About/History";
import Breeding from "@/components/About/Breeding";
import Team from "@/components/About/Team";
import Hero from "@/components/About/Hero";

export default function About() {
    return (
        <>
            <Navbar />
            <Hero />
            <History />
            <Breeding />
            <Team />
            <Footer />
        </>
    );
}
