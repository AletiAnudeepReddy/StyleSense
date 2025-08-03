"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Menu,
    Shirt,
    Upload,
    Info,
    LogIn,
    UserPlus,
} from "lucide-react";
import AuthModal from "@/components/AuthModal"; // ✅ import modal

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    return (
        <header className="w-full h-16 fixed top-0 left-0 z-50 bg-white backdrop-blur-md shadow-xl shadow-[#3ee8ff]/10">
            <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center tracking-wide text-3xl font-bold text-[#2C2C2C] space-x-3">
                    <Image
                        src="/icon2.png"
                        alt="StyleSense Logo"
                        width={45}
                        height={45}
                        className="object-contain opacity-70 text-[#2da5b4] bg-[#2da5b4]/30 border border-[#2da5b4]/20 rounded-full p-1"
                    />
                    <span>
                        Style<span className=" text-[#2da5b4]">Sense</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/explore" className="flex items-center hover:scale-103 gap-1.5 text text-[#2C2C2C] hover:text-[#2da5b4] transition">
                        <Shirt size={16.5} />
                        Explore Styles
                    </Link>
                    <Link href="/upload" className="flex items-center hover:scale-103 gap-1.5 text-[#2C2C2C] hover:text-[#2da5b4] transition">
                        <Upload size={16.5} />
                        Upload Style
                    </Link>
                    <Link href="/about" className="flex items-center hover:scale-103 gap-1.5 text-[#2C2C2C] hover:text-[#2da5b4] transition">
                        <Info size={16.5} />
                        About Us
                    </Link>

                    {/* Auth Buttons */}
                    <button
                        onClick={() => setShowLogin(true)}
                        className="flex items-center gap-2 px-4 py-1.5 hover:scale-103 rounded-2xl text-[#2C2C2C] hover:bg-[#3ee8ff]/20 transition border border-[#E0D7F8]"
                    >
                        <LogIn size={16} />
                        Login
                    </button>
                    <button
                        onClick={() => setShowSignup(true)}
                        className="flex items-center gap-2 px-4 py-1.5 hover:scale-103 rounded-xl bg-[#2da5b4] text-white hover:bg-[#63a2aa] transition"
                    >
                        <UserPlus size={16} />
                        Sign Up
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-[#2C2C2C]" onClick={() => setIsOpen(!isOpen)}>
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#FBFBF9] border-t border-[#E0D7F8] px-4 pb-4 space-y-4">
                    <Link href="/explore" className="flex items-center gap-2 text-[#2C2C2C] hover:text-[#2da5b4] transition">
                        <Shirt size={18} />
                        Explore Styles
                    </Link>
                    <Link href="/upload" className="flex items-center gap-2 text-[#2C2C2C] hover:text-[#2da5b4] transition">
                        <Upload size={18} />
                        Upload Style
                    </Link>
                    <Link href="/about" className="flex items-center gap-2 text-[#2C2C2C] hover:text-[#2da5b4] transition">
                        <Info size={18} />
                        About Us
                    </Link>
                    <button
                        onClick={() => setShowLogin(true)}
                        className="block px-4 py-2 rounded-full border border-[#E0D7F8] text-center text-[#2C2C2C] hover:bg-[#E0D7F8]/40 transition"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setShowSignup(true)}
                        className="block px-4 py-2 rounded-full bg-[#f5bcc2] text-center text-[#2C2C2C] hover:bg-[#fcb0b7] transition"
                    >
                        Sign Up
                    </button>
                </div>
            )}

            {/* Auth Modals */}
            <AuthModal isOpen={showLogin} setIsOpen={setShowLogin} type="login" />
            <AuthModal isOpen={showSignup} setIsOpen={setShowSignup} type="signup" />
        </header>
    );
}
