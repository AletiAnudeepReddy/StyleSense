"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "How does StyleSense recommend outfits?",
        answer:
            "StyleSense uses AI and deep learning models trained on fashion datasets to analyze your uploaded photo and suggest clothing styles that suit you.",
    },
    {
        question: "Is my uploaded photo stored or shared?",
        answer:
            "No, your photos are processed securely for style detection and are not stored or shared unless you opt-in to save them for your style history.",
    },
    {
        question: "Can I see fashion suggestions for different occasions?",
        answer:
            "Yes! StyleSense offers outfit suggestions for casual, formal, party wear, and more based on your preferences or detected context.",
    },
    {
        question: "How accurate is the AI in identifying my style?",
        answer:
            "Our AI model has been fine-tuned on fashion datasets like DeepFashion. While it’s quite accurate, you can always refine suggestions manually.",
    },
    {
        question: "Can I save and revisit my past recommendations?",
        answer:
            "Yes! You can sign in to your account and view your previous style suggestions in the virtual wardrobe history section.",
    },
    {
        question: "What if I want recommendations without uploading a photo?",
        answer:
            "You can also explore outfit ideas based on your selected mood, category, or preferences without uploading a photo.",
    },
    {
        question: "Do you support fashion suggestions for kids?",
        answer:
            "Absolutely! StyleSense supports men, women, and kids fashion recommendations to help the whole family dress in style.",
    },
    {
        question: "Can I shop directly from the suggestions?",
        answer:
            "Yes! We integrate with APIs like ASOS and Zalando to help you buy suggested items directly or explore similar options.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className="bg-[#FBFBF9] py-15 pb-20 px-4 sm:px-8">
            <div className="max-w-4xl mx-auto text-center mb-9">
                <h2 data-aos="fade-down"
                    data-aos-delay="50" className="text-4xl font-bold text-gray-700">
                    Frequently Asked{" "}
                    <span className="bg-gradient-to-r from-[#2da5b4] to-[#3ee8ff] text-transparent bg-clip-text drop-shadow-[0_1px_10px_rgba(255,255,255,0.8)]">
                        Questions
                    </span>
                </h2>
                <p data-aos="zoom-in"
                    data-aos-delay="100" className="mt-4 text-gray-600">Everything you need to know about using StyleSense</p>
            </div>

            <div className="space-y-2 max-w-5xl mx-auto">
                {faqs.map((faq, index) => (
                    <div data-aos="zoom-out"
                        data-aos-delay="100"
                        key={index}
                        className="border border-gray-200 rounded-lg p-5 py-3 shadow-sm bg-white transition duration-300"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left"
                        >
                            <span className="text-md font-medium text-gray-800">
                                {faq.question}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-[#2da5b4]" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-[#2da5b4]" />
                            )}
                        </button>
                        {openIndex === index && (
                            <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
