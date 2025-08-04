"use client";
import { motion } from "framer-motion";
import { Shirt, Camera, Sparkle, Image, Star } from "lucide-react";

export default function AboutUs() {
    return (<div className="bg-[#FBFBF9] pt-10">
        <section className="relative max-w-7xl mt-15 mx-auto px-10 py-10 bg-[#3ee8ff]/9 text-[#2C2C2C] overflow-hidden">
            {/* Gradient Blobs */}
            

            {/* Title */}
            <motion.h1 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-center mb-6"
            >
                What is{" "}
                <span className="bg-gradient-to-r from-[#2da5b4] via-[#2da5b4] to-[#2da5b4] text-transparent bg-clip-text">
                    StyleSense
                </span>
                ?
            </motion.h1>

            {/* Short Description */}
            <p className="text-center text-lg md:text-xl text-[#3b3b3b] max-w-3xl mx-auto mb-12">
                StyleSense is your AI-powered fashion companion. We analyze your outfit using machine learning to deliver real-time personalized clothing suggestions that enhance your unique style.
            </p>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="space-y-10">
                    <div>
                        <h2 className="text-2xl font-bold text-[#2da5b4] flex items-center gap-2">
                            <Sparkle size={24} /> Our Mission
                        </h2>
                        <p className="text-[#3b3b3b] text-lg leading-relaxed">
                            To simplify fashion discovery using AI. We want everyone to feel confident, expressive, and bold in their own wardrobe — regardless of age or gender.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#2da5b4] flex items-center gap-2">
                            <Star size={24} /> Our Vision
                        </h2>
                        <p className="text-[#3b3b3b] text-lg leading-relaxed">
                            We envision a future where fashion is not dictated — it is discovered. Personalized, ethical, and powered by technology that understands you.
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center"
                >
                    <img
                        src="/banner.webp"
                        alt="StyleSense Fashion AI"
                        className="rounded-2xl shadow-xl max-w-full"
                    />
                </motion.div>
            </div>

            {/* How It Works */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-10 text-[#2C2C2C]">
                    How It Works
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: <Camera size={28} />,
                            title: "Upload Your Look",
                            desc: "Start by uploading your outfit image — selfie or full-body.",
                        },
                        {
                            icon: <Image size={28} />,
                            title: "AI Style Recognition",
                            desc: "Our fine-tuned deep learning model analyzes your outfit instantly.",
                        },
                        {
                            icon: <Shirt size={28} />,
                            title: "Style Suggestions",
                            desc: "We recommend curated looks from live fashion trends.",
                        },
                        {
                            icon: <Sparkle size={28} />,
                            title: "Shop the Look",
                            desc: "Get tailored recommendations and links to shop seamlessly.",
                        },
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="p-6 bg-white rounded-xl text-center border border-[#f0f0f0] shadow-sm"
                        >
                            <div className="text-[#2da5b4] flex justify-center items-center mb-3">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-[#555] text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Why StyleSense */}
            <div className="bg-white rounded-2xl p-10 md:p-14 text-center border border-[#f0f0f0]">
                <h2 className="text-3xl font-bold mb-6">Why StyleSense?</h2>
                <p className="text-lg text-[#3b3b3b] max-w-3xl mx-auto mb-10">
                    Unlike traditional fashion apps, StyleSense is powered by real-time computer vision and ML intelligence, giving you hyper-personalized outfit inspiration without the guesswork.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "AI-Powered Engine",
                            text: "Backed by DeepFashion, our AI understands 1,000+ styles and trends.",
                        },
                        {
                            title: "Personalization",
                            text: "Every suggestion is tuned to your taste, size, and previous choices.",
                        },
                        {
                            title: "Real-Time Trends",
                            text: "Pulls in live looks from top fashion APIs like ASOS, Zara, and more.",
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-[#FBFBF9] border border-[#eaeaea] shadow-sm rounded-xl p-6">
                            <h4 className="text-[#2da5b4] font-semibold mb-2">{item.title}</h4>
                            <p className="text-sm text-[#555]">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
}
