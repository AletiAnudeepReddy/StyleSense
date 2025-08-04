"use client"
import React, { useState } from "react";

const categories = ["All", "Women", "Men", "Kids"];
const useCases = {
    All: [
        "/models/men1.webp",
        "/models/women1.webp",
        "/models/kid1.webp",
        "/models/men2.webp",
    ],
    Women: [
        "/models/women1.webp",
        "/models/women2.webp",
        "/models/women3.webp",
        "/models/women4.webp",
    ],
    Men: [
        "/models/men1.webp",
        "/models/men2.webp",
        "/models/men3.webp",
        "/models/men4.webp",
    ],
    Kids: [
        "/models/kid1.webp",
        "/models/kid2.webp",
        "/models/kid3.webp",
        "/models/kid4.webp",
    ],
};

const UseCases = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <section className="py-20 mx-w-6xl">
            <div className="text-center">
                <p data-aos="fade-down"
                    data-aos-delay="50" className="text-lg font-semibold text-black">Use Cases</p>
                <h2 data-aos="zoom-out"
                    data-aos-delay="100" className="text-4xl font-bold text-gray-800 mt-2">
                    For Everyone: <span className="bg-gradient-to-r from-[#2da5b4] via-[#3ee8ff] to-[#2da5b4] text-transparent bg-clip-text">Men, Women & Kids</span>
                </h2>
                <p data-aos="zoom-in"
                    data-aos-delay="150" className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Our AI outfit try-on works across all age groups and genders. Upload your image and try styles that suit your body and preferences with ease.
                </p>
            </div>

            <div className="flex justify-center mt-8 gap-3 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`rounded-full px-5 py-2 border transition-all ${activeCategory === cat
                            ? "bg-[#2da5b4] text-white border-[#2da5b4]"
                            : "bg-white text-gray-800 border-gray-300"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="mt-12 overflow-x-auto flex gap-6 px-4 hide-scrollbars">
                {useCases[activeCategory].map((img, idx) => (
                    <div data-aos="zoom-in"
                        data-aos-delay="100" key={idx} className="min-w-[262px] h-[370px] rounded-xl shadow-md overflow-hidden">
                        <img
                            src={img}
                            alt={`Use case ${idx + 1}`}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UseCases;
