"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Puppies/Hero";
import Filter from "@/components/Puppies/Filter";
import PuppiesList from "@/components/Puppies/PuppiesList";

export default function About() {
    return (
        <>
            <Navbar />
            <Hero />
            <Filter />
            <PuppiesList />
            <Footer />
        </>
    );
}
