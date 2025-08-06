"use client";

import { useState } from "react";
import { UploadCloud, User, ImagePlus, Shirt } from "lucide-react";
import { motion } from "framer-motion";

export default function UploadStylePage() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const categories = [
        { name: "Men", icon: <User /> },
        { name: "Women", icon: <Shirt /> },
        { name: "Kids", icon: <ImagePlus /> },
    ];

    return (
        <div className="min-h-screen pt-[15vh] bg-[#FBFBF9] p-6">
        <div className="absolute w-[650px] h-[650px] bg-[#3ee8ff] rounded-full blur-[160px] opacity-20 top-[-250px] left-[-200px] z-[0]"></div>
                <div className="absolute w-[650px] h-[650px] bg-[#3ee8ff] rounded-full blur-[180px] opacity-20 bottom-[-200px] right-[-0px] z-[0]"></div>
                
            <div className="max-w-5xl relative mx-auto bg-[#FBFBF9] border-2 border-gray-300/88 rounded-2xl z-10 p-8">
                <h1 className="text-3xl font-bold text-center text-gray-600 mb-2">Upload Your <span className="bg-gradient-to-r from-[#2da5b4] via-[#3ee8ff] to-[#2da5b4] text-transparent bg-clip-text">Style</span></h1>
                <p className="text-center text-gray-500 mb-8">
                    Upload your outfit to get personalized fashion recommendations.
                </p>

                <div className="grid md:grid-cols-5 gap-6">
                    {/* Image Upload Area */}
                    <div
                        className="border-2 col-span-3 border-dashed border-[#3ee8ff] p-6 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#f0fdfa]"
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <UploadCloud className="h-12 w-12 text-[#2da5b4] mb-2" />
                        <p className="text-gray-600">Drag and drop your image here or</p>
                        <label className="bg-[#2da5b4] text-white px-4 py-2 rounded-full cursor-pointer mt-2 hover:bg-[#1c8d97]">
                            Browse File
                            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                        </label>
                        {previewImage && (
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="mt-4 w-full max-w-[300px] rounded-xl shadow-md"
                            />
                        )}
                    </div>

                    {/* Category Selection */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-700">Select Category</h2>
                        <div className="flex gap-4">
                            {categories.map((cat) => (
                                <motion.button
                                    key={cat.name}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(cat.name)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm duration-300 border text-sm
                    ${selectedCategory === cat.name
                                            ? "bg-[#2da5b4] text-white border-[#2da5b4]"
                                            : "bg-white text-gray-600 border-gray-300 hover:bg-[#e0f7fa]"}`}
                                >
                                    {cat.icon}
                                    {cat.name}
                                </motion.button>
                            ))}
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                disabled={!previewImage || !selectedCategory}
                                className="bg-gradient-to-r from-[#2da5b4] to-[#3ee8ff] px-6 py-2 rounded-full text-white font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 duration-300"
                            >
                                Submit Style
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}