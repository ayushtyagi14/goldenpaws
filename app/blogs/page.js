"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Blogs/Hero";
import BlogCards from "@/components/Blogs/BlogCards";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <BlogCards />
            <Footer />
        </>
    );
}
