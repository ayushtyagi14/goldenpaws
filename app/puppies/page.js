"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Puppies/Hero";
import Filter from "@/components/Puppies/Filter";
import PuppiesList from "@/components/Puppies/PuppiesList";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function About() {
    const [puppies, setPuppies] = useState([]);

    const router = useRouter();

    const getPuppies = async () => {
        try {
            var myHeaders = new Headers();

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            const response = await fetch('https://goldenpaws-backend.onrender.com/api/pets/getAllPets', requestOptions);

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                setPuppies(result);
            }

        } catch (error) {
            console.log(error, "Error getting puppies data");
        }
    }

    useEffect(() => {
        getPuppies();
    }, [])

    return (
        <>
            <Navbar />
            <Hero />
            <Filter />
            <PuppiesList puppies={puppies} />
            <Footer />
        </>
    );
}
