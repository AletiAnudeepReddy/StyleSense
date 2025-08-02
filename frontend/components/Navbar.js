"use client";
import { useState } from "react";
import Link from "next/link";
import {
    Menu,
    Shirt,
    Upload,
    Info,
    LogIn,
    UserPlus,
    Sparkles, // You can replace with any logo-like icon or your own image
} from "lucide-react";
import { Scissors  } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full h-17 fixed top-0 left-0 z-50 bg-[#FBFBF9]/60 backdrop-blur-md shadow-xs">

            <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center tracking-wide text-3xl font-bold text-[#2C2C2C] space-x-2">
                    
                    <span>
                        Style<span className=" text-[#876cd0]">Sense</span>
                    </span>
                    
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/explore" className="flex items-center hover:scale-103 gap-1.5 text text-[#2C2C2C] hover:text-[#ed858f] transition">
                        <Shirt size={16.5} />
                        Explore Styles
                    </Link>
                    <Link href="/upload" className="flex items-center hover:scale-103 gap-1.5 text-[#2C2C2C] hover:text-[#ed858f] transition">
                        <Upload size={16.5} />
                        Upload Style
                    </Link>
                    <Link href="/about" className="flex items-center hover:scale-103 gap-1.5 text-[#2C2C2C] hover:text-[#ed858f] transition">
                        <Info size={16.5} />
                        About Us
                    </Link>

                    {/* Auth Buttons */}
                    <Link
                        href="/login"
                        className="flex items-center gap-2 px-4 py-1.5 hover:scale-103 rounded-2xl text-[#2C2C2C] hover:bg-[#E0D7F8] transition border border-[#E0D7F8]"
                    >
                        <LogIn size={16} />
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="flex items-center gap-2 px-4 py-1.5 hover:scale-103 rounded-xl bg-[#876cd0] text-white hover:bg-[#7b68af] transition"
                    >
                        <UserPlus size={16} />
                        Sign Up
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[#2C2C2C]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#FBFBF9] border-t border-[#E0D7F8] px-4 pb-4 space-y-4">
                    <Link href="/explore" className="flex items-center gap-2 text-[#2C2C2C] hover:text-[#ed858f] transition">
                        <Shirt size={18} />
                        Explore Styles
                    </Link>
                    <Link href="/upload" className="flex items-center gap-2 text-[#2C2C2C] hover:text-[#ed858f] transition">
                        <Upload size={18} />
                        Upload Style
                    </Link>
                    <Link href="/about" className="flex items-center gap-2 text-[#2C2C2C] hover:text-[#ed858f] transition">
                        <Info size={18} />
                        About Us
                    </Link>
                    <Link
                        href="/login"
                        className="block px-4 py-2 rounded-full border border-[#E0D7F8] text-center text-[#2C2C2C] hover:bg-[#E0D7F8]/40 transition"
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="block px-4 py-2 rounded-full bg-[#f5bcc2] text-center text-[#2C2C2C] hover:bg-[#fcb0b7] transition"
                    >
                        Sign Up
                    </Link>
                </div>
            )}
        </header>
    );
}
