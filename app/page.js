"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Homepage/Hero";
import Introduction from "@/components/Homepage/Introduction";
import Featured from "@/components/Homepage/Featured";
import Contact from "@/components/Homepage/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Featured />
      <Contact />
      <Footer />
    </>
  );
}
