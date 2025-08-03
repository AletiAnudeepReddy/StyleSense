import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white pt-16 pb-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <h2 className="text-3xl font-bold text-[#3ee8ff]">StyleSense</h2>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            StyleSense is your AI-powered fashion companion. Discover your personal style, explore outfit recommendations, and shop looks that fit you perfectly — all with a single photo.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#3ee8ff]">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/features" className="hover:text-white transition">Features</a></li>
            <li><a href="/faq" className="hover:text-white transition">FAQs</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#3ee8ff]">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#3ee8ff]" />
              <span>CBIT-Hyderabad. 500075</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#3ee8ff]" />
              <span>+91 90143-84195</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#3ee8ff]" />
              <span>aletianudeepreddy8@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#3ee8ff]">Stay in Style</h3>
          <p className="text-sm text-gray-300 mb-4">
            Want personalized outfit ideas and fashion trends delivered to your inbox? Enter your email to get AI-powered style updates!
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg text-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#3ee8ff] min-w-23 hover:bg-[#2da5b4] text-[#0d1b2a] px-3 py-2 rounded-lg font-semibold transition"
            >
              Get Tips
            </button>
          </form>
        </div>

      </div>

      {/* Divider */}
      <div className="my-10 border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 px-4">
        <p>&copy; {new Date().getFullYear()} StyleSense. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
