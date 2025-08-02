"use client";
import { motion } from "framer-motion";
import { Shirt, Camera, Sparkle, Image, Star } from "lucide-react";

export default function AboutUs() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-center mt-10 mb-6"
            >
                What is{" "}
                <span className="bg-gradient-to-r from-[#876cd0] via-pink-500 to-indigo-500 text-transparent bg-clip-text">
                    StyleSense
                </span>
                ?
            </motion.h1>

            <p className="text-center text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                StyleSense is an AI-powered fashion assistant that analyzes your outfit,
                identifies your style, and recommends personalized clothing to elevate
                your wardrobe—effortlessly and intelligently.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#876cd0] flex items-center gap-2">
                        <Sparkle size={24} /> Our Mission
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        To make fashion accessible, intelligent, and personalized for
                        everyone by blending the power of AI with the art of style.
                    </p>

                    <h2 className="text-2xl font-bold text-[#876cd0] flex items-center gap-2">
                        <Star size={24} /> Our Vision
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Empower individuals to confidently express themselves through fashion
                        by offering smart outfit suggestions, sustainable choices, and curated
                        looks based on their style history.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <img
                        src="/banner.webp"
                        alt="StyleSense Fashion AI"
                        className="rounded-2xl shadow-xl"
                    />
                </motion.div>
            </div>

            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#2C2C2C]">
                    How it Works
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: <Camera size={28} />,
                            title: "Upload Your Photo",
                            desc: "Snap a selfie or upload an outfit image to get started.",
                        },
                        {
                            icon: <Image size={28} />,
                            title: "Style Detection",
                            desc: "Our AI analyzes your outfit using a fine-tuned DeepFashion CNN model.",
                        },
                        {
                            icon: <Shirt size={28} />,
                            title: "Style Match",
                            desc: "We match your look with trending outfits from top brands.",
                        },
                        {
                            icon: <Sparkle size={28} />,
                            title: "Personal Recommendations",
                            desc: "Get a customized list of clothes, accessories, and outfit tips.",
                        },
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="p-6 bg-white shadow-lg rounded-xl text-center border border-gray-100"
                        >
                            <div className="text-[#876cd0] mb-3">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="bg-[#f9f9fb] rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Why StyleSense?</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                    Unlike traditional fashion apps, StyleSense understands your personal
                    fashion language through visual analysis and machine learning.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white shadow-md p-5 rounded-xl border">
                        <h4 className="text-[#876cd0] font-semibold mb-2">
                            AI-Driven Fashion
                        </h4>
                        <p className="text-sm text-gray-600">
                            Trained on DeepFashion dataset for accurate style classification.
                        </p>
                    </div>
                    <div className="bg-white shadow-md p-5 rounded-xl border">
                        <h4 className="text-[#876cd0] font-semibold mb-2">
                            Personalized Looks
                        </h4>
                        <p className="text-sm text-gray-600">
                            Tailored to your fashion preferences and body type.
                        </p>
                    </div>
                    <div className="bg-white shadow-md p-5 rounded-xl border">
                        <h4 className="text-[#876cd0] font-semibold mb-2">
                            Fashion API Integrations
                        </h4>
                        <p className="text-sm text-gray-600">
                            Connects with ASOS, Zalando & Shopify to bring live fashion feeds.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
