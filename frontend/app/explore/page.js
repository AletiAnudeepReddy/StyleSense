"use client";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const brands = [
    {
        name: "Myntra",
        logo: "/logos/myntra.png",
        logoHeight: "h-19",
        logoWidth: "w-45",
        products: ["/myntra1.webp", "/myntra2.webp", "/myntra3.webp", "/myntra4.webp"],
    },
    {
        name: "Zalando",
        logo: "/logos/zalando.png",
        logoHeight: "h-30",
        logoWidth: "w-45",
        products: ["/zalando1.webp", "/zalando2.webp", "/zalando3.webp", "/zalando4.webp"],
    },
    {
        name: "Shopify",
        logo: "/logos/shopify.webp",
        logoHeight: "h-20",
        logoWidth: "w-35",
        products: ["shopify1.webp", "shopify2.webp", "shopify3.webp", "shopify4.webp"],
    },
    {
        name: "H&M",
        logo: "/logos/hm.png",
        logoHeight: "h-20",
        logoWidth: "w-30",
        products: ["/hm1.avif", "/hm2.avif", "/hm3.webp", "/hm4.avif"],
    },
    {
        name: "ASOS",
        logo: "/logos/Asos.svg.png",
        logoHeight: "h-20",
        logoWidth: "w-30",
        products: ["/asos1.webp", "/asos2.webp", "/asos3.webp", "/asos4.webp"],
    },
    {
        name: "Urban Outfitters",
        logo: "/logos/urbanoutfitters.png",
        logoHeight: "h-18",
        logoWidth: "w-36",
        products: ["/urban1.webp", "/myntra1.webp", "/shopify2.webp", "/urban4.webp"],
    },
];

export default function ExplorePage() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="bg-[#3ee8ff]/10">
            <div className="px-4 max-w-7xl container mx-auto mt-10 md:px-10 py-16 space-y-20 bg-[#FBFBF9]">
                <div className="absolute w-[650px] h-[650px] bg-[#3ee8ff] rounded-full blur-[160px] opacity-25 top-[-250px] left-[-200px] z-[0]"></div>
                <div className="absolute w-[650px] h-[650px] bg-[#3ee8ff] rounded-full blur-[180px] opacity-25 bottom-[-200px] right-[-0px] z-[0]"></div>
                <div className="absolute w-[650px] h-[650px] bg-[#3ee8ff] rounded-full blur-[160px] opacity-25 top-[1100px] left-[-200px] z-[0]"></div>
                <div className="absolute w-[650px] h-[650px] bg-[#3ee8ff] rounded-full blur-[180px] opacity-25 top-[1900px] right-[-0px] z-[0]"></div>
                <div className="absolute w-[650px] h-[650px] bg-[#3ee8ff] rounded-full blur-[160px] opacity-25 top-[2600px] left-[-200px] z-[0]"></div>



                {/* 🌟 Main Heading & Description */}
                <div className="text-center max-w-2xl mx-auto space-y-6 mb-10 ">
                    <h1 className="text-4xl md:text-5xl py-2 font-bold bg-gradient-to-r from-[#238693] via-[#3ee8ff] to-[#23808c] bg-clip-text text-transparent  drop-shadow-md">Explore Styles</h1>
                    <p className="text-gray-600 text-md md:text-lg font-medium">
                        Discover trending fashion from top global brands. Browse collections, get inspired, and shop your vibe!
                    </p>
                </div>
                {/* 🔥 Brand Sections */}
                {brands.map((brand, index) => (
                    <section key={index} className="space-y-4 border-t-2 border-t-gray-300/80 bg-">
                        <div className="flex justify-center">
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className={`object-contain opacity-100 ${brand.logoHeight} ${brand.logoWidth}`}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
                            {brand.products.map((img, i) => (
                                <div
                                    data-aos="zoom-in"
                                    key={i}
                                    className="rounded-2xl mt-30 bg-white hover:bg-[#2da5b4]/80 hover:text-white 
                  shadow-xl duration-300 group w-full max-w-[260px]"
                                >
                                    <div className="h-[100px] flex justify-center items-center">
                                        <img
                                            src={img}
                                            alt=""
                                            className="max-w-[150px] block mx-auto transform rounded-xl -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                                        />
                                    </div>

                                    <div className="p-4 text-center -mt-6">
                                        <div className="flex items-center justify-center gap-1">
                                            {[...Array(4)].map((_, i) => (
                                                <FaStar key={i} className="text-yellow-500" />
                                            ))}
                                        </div>
                                        <h1 className="text-base font-bold mt-1 text-gray-800 group-hover:text-white">Trendy Style</h1>
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                            Inspired by latest {brand.name} collection.
                                        </p>
                                        <button
                                            className="bg-gradient-to-r from-[#2da5b4] to-[#3ee8ff] hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 
                        group-hover:bg-gradient-to-r group-hover:from-[#FBFBF9] group-hover:to-white group-hover:text-gray-600 group-hover:shadow-md"
                                        >
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
