"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Homepage/Contact";
import Connect from "@/components/Contact/Connect";

export default function Home() {
    return (
        <>
            <Navbar />
            <Connect />
            <Contact />
            <Footer />
        </>
    );
}
